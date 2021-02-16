import koaRouter from 'koa-router';

import api from './api';

/** @type {Object} 服务器路由对象 (koa-router) */
export const router = koaRouter();

/** @type {Object} 服务器路由表 */
export default router.routes();

// ----------------------------------------------------------------------------

router.get('/api/timestamp', async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = {
        ts: Date.now(),
    };
});

for (const [key, value] of Object.entries(api)) {
    router.get(`/api/${key}`, value);
}
