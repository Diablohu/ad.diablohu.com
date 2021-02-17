import { Db } from 'mongodb';
import { Context } from 'koa';

import { getClient } from '../mongodb';

// ============================================================================

type APIFunction = (ctx: Context, db: Db) => Promise<void>;

// ============================================================================

// let db;
const dbName = 'diablohu_com';
const defaultCollections = ['category', 'project', 'video', 'gallery'];
let isPrepared = false;

// ============================================================================

const apis: {
    [key: string]: APIFunction;
} = {
    'test-db-connection': async (ctx, db) => {
        ctx.body = {
            msg: 'Connected successfully to MongoDB server!',
            data: (await db.collections()).map((c) => c.collectionName),
        };
    },
};

// ============================================================================

const wrap = (ctx: Context, func: APIFunction) =>
    async function () {
        ctx.set('Access-Control-Allow-Origin', '*');

        const client = await getClient();

        try {
            // console.log({ client, isConnected: client.isConnected() });
            if (!client.isConnected()) {
                await client.connect();
            }
            // Establish and verify connection
            // await client.db('admin').command({ ping: 1 });
            // get database
            const db = client.db(dbName);

            // prepare collections
            if (!isPrepared) {
                const collectionsCurr = await db.collections();
                const collectionsToCreate = defaultCollections.filter(
                    (name) =>
                        !collectionsCurr.some(
                            (thisCollection) =>
                                thisCollection.collectionName === name
                        )
                );
                for (const collection of collectionsToCreate) {
                    await db.createCollection(collection);
                }
                if (collectionsToCreate.length) {
                    console.warn('Collections created: ', collectionsToCreate);
                }
                // console.log({
                //     collectionsToCreate,
                //     after: (await db.collections()).map((c) => c.collectionName),
                // });
                isPrepared = true;
            }

            await func(ctx, db);
        } catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
            ctx.app.emit('error', err, ctx);
        } finally {
        }
    };
for (const [key, func] of Object.entries(apis)) {
    apis[key] = async (ctx: Context) => await wrap(ctx, func)();
}

export default apis;
