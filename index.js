const Hapi = require('hapi');
const Models = require('./models');
const Routes = require('./routes');
const Path = require('path');

const server = new Hapi.Server();
server.connection({
    port: 8000,
    host: 'localhost',
});

server.register(require('vision'),(err) => {
    console.log(err);
});
server.register(require('inert'),(err) => {
    console.log(err);
});

server.register({
    register: require('hapi-cron'),
    options: {
        jobs: [{
            name: 'speedtest',
            time: '0 0 * * * *',
            timezone: 'Europe/London',
            request: {
                method: 'GET',
                url: '/test'
            }
        }]
    },
}, (err) => {
    console.log(err);
});

server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views',
    helpersPath: './helpers',
});

server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
        directory: {
            path: './public/',
            listing: true
        }
    }
});


for (var route in Routes) {
    server.route(Routes[route]);
}

// Start the server
Models.sequelize.sync().then(function() {
    server.start(function () {
        console.log("Hapi server started @", server.info.uri);
    });
});