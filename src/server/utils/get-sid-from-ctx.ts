import { Context } from 'koa';
import { SESSION_SID } from '@constants/keys';

function getSid(ctx: Context): string | void {
    let sid = ctx.cookies.get(SESSION_SID);
    if (!!sid) {
        try {
            sid = JSON.parse(sid)._sid;
        } catch (e) {}
    }
    return sid || undefined;
}

export default getSid;
