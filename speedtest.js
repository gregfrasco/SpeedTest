const exec = require('child_process').exec;

module.exports = function() {
    return new Promise((resolve, reject) => {
        exec('speedtest --json', (error, stdout, stderr) => {
            if (error) {
                reject(error)
            }
            resolve(JSON.parse(stdout));
        });
    });
};
