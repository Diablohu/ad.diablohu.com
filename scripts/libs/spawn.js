const spinner = require('koot/utils/spinner');

const spawn = async (cmd, options = {}) => {
    const chunks = cmd.split(' ');
    await new Promise((resolve, reject) => {
        const child = require('child_process').spawn(chunks.shift(), chunks, {
            stdio: 'inherit',
            shell: true,
            ...options
        });
        child.on('close', () => {
            resolve();
        });
        child.on('error', (...args) => {
            reject(...args);
        });
    }).catch(e => {
        spinner(cmd).fail();
        console.error(e);
    });
};

module.exports = spawn;
