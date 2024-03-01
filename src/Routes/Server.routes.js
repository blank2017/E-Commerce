const websiteRoutes = require('./Website.routes');

function route(server) {
    server.use('/', websiteRoutes)
}

module.exports = route
