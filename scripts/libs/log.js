/* eslint-disable no-console */

const chalk = require('chalk');

const log = (emoji, msg, logging = true) => {
    if (!msg) return log(' ', emoji);
    if (msg === true || msg === false) return log('  ', emoji, msg);

    const m = `${emoji === true ? chalk.green('√') : emoji}${
        emoji === '' ? '' : ' '
    }${chalk.redBright('[sp.diablohu.com]')} ${msg}`;

    if (logging) console.log(m);
    return m;
};

module.exports = log;
