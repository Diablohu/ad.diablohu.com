const path = require('path');
const spinner = require('koot/utils/spinner');
const spawn = require('../libs/spawn');
const log = require('../libs/log');

module.exports = async (appConfig) => {
    if (process.env.KOOT_BUILD_DATA_PROCESSED) return;

    // eslint-disable-next-line no-console
    console.log(' ');

    const msg = log('', `Processing assets`, false);
    const waiting = spinner(msg + '...');

    // await spawn(`node ${path.resolve(__dirname, '../building/videos.js')}`);

    waiting.stop();
    spinner(msg).succeed();

    process.env.KOOT_BUILD_DATA_PROCESSED = true;
};
