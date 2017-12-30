'use strict';
const Speedtest = require('../speedtest');
const Models  = require('../models');

module.exports = function () {
    return [{
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            Models.Test.findAll().then(function(tests) {
                reply.view('index',{
                    tests: JSON.stringify(tests)
                });
            });

        }
    },{
        method: 'GET',
        path: '/test',
        handler: function (request, reply) {
            console.log('Start Speedtest')
            Speedtest().then(results => {
                const test = {
                    testID: uuidv4(),
                    bytes_sent: results.bytes_sent,
                    download: results.download,
                    timestamp: results.timestamp,
                    bytes_received: results.bytes_received,
                    ping: results.ping,
                    upload: results.upload,
                    latency: results.server.latency,
                    location: results.server.name,
                    lat: results.server.lat,
                    lng: results.server.lon,
                    host: results.server.host,
                    sponsor: results.server.sponsor,
                    distance: results.server.d,
                };
                Models.Test.create(test);
                reply(test);
            });

        }
    }];
}();

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}