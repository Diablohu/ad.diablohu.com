import { MongoClient } from 'mongodb';

import getDbUrl from './utils/get-db-url';

// ============================================================================

const clients: Map<string, MongoClient> = new Map();
export const dbName = 'portal_diablohu_com';
export const colletions = {
    sessions: 'sessions',
    '2fa': 'twofactor',
};

// ============================================================================

export async function getClient(url?: string): Promise<MongoClient> {
    const uri =
        url ?? (await getDbUrl()) + '?retryWrites=true&writeConcern=majority';

    if (clients.has(uri)) return clients.get(uri) as MongoClient;

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    // Connect the client to the server
    await client.connect();

    //
    clients.set(uri, client);
    return client;
}

// ============================================================================

// Exit handler
function exitHandler() {
    try {
        Promise.all(
            [...clients].map(([_, client]) => {
                if (client.isConnected()) return client.close(false);
                return new Promise<void>((resolve) => resolve());
            })
        ).then(() => {
            // eslint-disable-next-line no-console
            console.log(`MongoDB client close successfully!`);
            process.exit(0);
        });
    } catch (e) {
        if (process) process.exit(0);
    }
}
process.on('exit', exitHandler);
// catches ctrl+c event
process.on('SIGINT', exitHandler);
// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler);
process.on('SIGUSR2', exitHandler);
// catches uncaught exceptions
process.on('uncaughtException', exitHandler);
