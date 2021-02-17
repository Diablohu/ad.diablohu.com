import koaRouter from 'koa-router';
import koaBody from 'koa-body';
import { generateSecret, verifyToken } from 'node-2fa';
import { SESSION_SID } from '@constants/keys';

import api from './api';
import getSid from '../utils/get-sid-from-ctx';
import { getClient, dbName, colletions } from '../mongodb';

/** @type {Object} 服务器路由对象 (koa-router) */
export const router = koaRouter();

/** @type {Object} 服务器路由表 */
export default router.routes();

// ============================================================================

router.get('/api/generate-2fa-secret/:email', async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = generateSecret({
        name: `Diablohu's Portal`,
        account: ctx.params.email,
    });
});

async function getSession(ctx) {
    ctx.set('Access-Control-Allow-Origin', '*');
    const sid = ctx.params.sid || getSid(ctx);
    // console.log({ sid }, ctx.session);
    ctx.body = {
        session: Object.keys(ctx.session).length
            ? ctx.session
            : (await (await getClient())
                  .db(dbName)
                  .collection(colletions.sessions)
                  .findOne({ _id: sid })
                  .then((doc) => {
                      let data;
                      try {
                          data = JSON.parse(doc.blob);
                      } catch (e) {}
                      return data;
                  })) || null,
        sid: getSid(ctx),
    };
}
router.get('/api/session', getSession);
router.get('/api/session/:sid', getSession);

router.post('/api/sign-in', koaBody({ multipart: true }), async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');

    if (ctx.session.auth === true) {
        ctx.body = {
            sid: getSid(ctx),
        };
        return;
    }

    const { email, code } = ctx.request?.body || {};

    if (!email || !code) {
        ctx.status = 406;
        ctx.body = 'missing parameter';
        // ctx.app.emit('error', ctx.body, ctx);
    }

    const client = await getClient();
    const db = client.db(dbName);
    const collection = db.collection(colletions['2fa']);
    const { secret } = await collection.findOne({ email });

    if (verifyToken(secret, code)) {
        ctx.session.auth = true;
        ctx.body = {
            sid: getSid(ctx),
        };
    } else {
        ctx.status = 403;
        ctx.body = 'auth failed';
        // ctx.app.emit('error', ctx.body, ctx);
    }
});

for (const [key, value] of Object.entries(api)) {
    router.get(`/api/${key}`, value);
}
