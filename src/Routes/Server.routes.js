const websiteRoutes = require('./Website.routes');

function route(server) {
    server.get('/', websiteRoutes)
}

module.exports = route