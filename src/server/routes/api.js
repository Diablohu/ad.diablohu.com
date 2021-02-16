import fs from 'fs-extra';
import { MongoClient } from 'mongodb';

// ============================================================================

// let db;
const dbName = 'diablohu_com';
const defaultCollections = ['category', 'project', 'video', 'gallery'];
let isPrepared = false;

// ============================================================================

async function getClient() {
    if (getClient.client) return getClient.client;

    const readSecret = async (name) =>
        (
            await fs.readFile(
                process.env[name].replace(
                    /(\\|\/)*%(.+?)%(\\|\/)*/g,
                    (match, p1 = '', p2, p3 = '') =>
                        `${p1}${process.env[p2] || ''}${p3}`
                ),
                'utf-8'
            )
        )
            .replace(/\n/g, '')
            .replace(/\r/g, '')
            .trim();

    const USERNAME = await readSecret('MONGO_INITDB_ROOT_USERNAME_FILE');
    const PASSWORD = await readSecret('MONGO_INITDB_ROOT_PASSWORD_FILE');

    const uri =
        'mongodb://' +
        `${USERNAME}:${PASSWORD}` +
        '@host.docker.internal:27017' +
        '?retryWrites=true&writeConcern=majority';

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    // Connect the client to the server
    getClient.client = await client.connect();

    function exitHandler() {
        if (client.isConnected())
            return client.close(false, function () {
                // eslint-disable-next-line no-console
                console.log('MongoDB client close successfully!');
                process.exit(0);
            });
        process.exit(0);
    }
    process.on('exit', exitHandler);
    // catches ctrl+c event
    process.on('SIGINT', exitHandler);
    // catches "kill pid" (for example: nodemon restart)
    process.on('SIGUSR1', exitHandler);
    process.on('SIGUSR2', exitHandler);
    // catches uncaught exceptions
    process.on('uncaughtException', exitHandler);

    return getClient.client;
}

// ============================================================================

const apis = {
    'test-db-connection': async (ctx, db) => {
        ctx.body = {
            msg: 'Connected successfully to MongoDB server!',
            data: (await db.collections()).map((c) => c.collectionName),
        };
    },
};

// ============================================================================

const wrap = (ctx, func) =>
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
            const db = await client.db(dbName);

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
    apis[key] = async (ctx) => await wrap(ctx, func)();
}

export default apis;
