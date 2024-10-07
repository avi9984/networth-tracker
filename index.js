const Hapi = require('@hapi/hapi');
const routes = require('./routes/user');
const connectDB = require('./config/db');
require('dotenv').config();

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost',
    });

    // Connect to MongoDB
    await connectDB();

    // Register routes
    server.route(routes);

    // Start the server
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
