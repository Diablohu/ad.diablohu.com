import readSecret from './read-secret';

async function getDbUrl(
    databaseName?: string,
    collectionName?: string
): Promise<string> {
    if (!databaseName && collectionName)
        throw new Error('Need databaseName when collectionName exists');

    const USERNAME = await readSecret('MONGO_INITDB_ROOT_USERNAME_FILE');
    const PASSWORD = await readSecret('MONGO_INITDB_ROOT_PASSWORD_FILE');

    const url =
        'mongodb://' +
        `${USERNAME}:${PASSWORD}` +
        '@host.docker.internal:27017' +
        (databaseName ? `/${databaseName}` : '') +
        (collectionName ? `/${collectionName}` : '');

    return url;
}

export default getDbUrl;
