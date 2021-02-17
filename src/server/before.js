/**
 * **服务器端生命周期**
 *
 * _创建 Koa 实例后、挂载任何中间件之前_
 */

import session from 'koa-session-store';
import axios from 'axios';
import { SESSION_SID } from '@constants/keys';

import routes from './routes';
// import readSecret from './utils/read-secret';
import { getClient, dbName as sessionDbName, colletions } from './mongodb';

const sessionColletionName = colletions.sessions;
let axiosBaseSet = false;

export default async (app) => {
    app.keys = [
        // await readSecret('ADMIN_PORTAL_2FA_SECRET_FILE')
        'DIABLOHU_PORTAL_SIGN_KEY',
    ];

    const client = await getClient();
    const db = client.db(sessionDbName);
    const collection = db.collection(sessionColletionName);

    app.use(
        session({
            name: SESSION_SID,
            store: {
                load(sid) {
                    return collection
                        .findOne({ _id: sid })
                        .then((data) => {
                            return data.blob;
                        })
                        .catch(() => {
                            return null;
                        });
                },
                save(sid, data) {
                    const { isNotBrowser = false, ...rest } = JSON.parse(data);
                    // console.log({ data });
                    if (isNotBrowser)
                        return new Promise((resolve) => resolve());
                    const doc = {
                        _id: sid,
                        blob: JSON.stringify(rest),
                        updatedAt: new Date(),
                    };
                    // console.log({ doc });
                    // return Promise((resolve) => resolve());
                    return collection.updateOne(
                        { _id: sid },
                        {
                            $set: doc,
                        },
                        {
                            upsert: true,
                        }
                    );
                },
                remove(sid) {
                    return collection.deleteOne({ _id: sid });
                },
            },
        })
    );

    // 默认值处理
    app.use(async (ctx, next) => {
        if (!axiosBaseSet) {
            axios.defaults.baseURL = ctx.origin;
            // axios.defaults.headers.common['Diablohu-Is-From-Server'] = 'yes';
            axiosBaseSet = true;
        }

        await next();

        const { session } = ctx;
        let { reqCount = 0 } = session;
        if (!session.reqFirst) session.reqFirst = Date.now();
        session.reqCount = ++reqCount;
        if (/^axios/.test(ctx.headers['user-agent']))
            session.isNotBrowser = true;
        // console.log(ctx.session);
    });

    app.use(routes);
};
