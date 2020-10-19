const { GraphQLServer, PubSub } = require('graphql-yoga');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const { pubsub, resolvers } = require('./resolvers');
const typeDefs = require('./typeDefs');

dotenv.config();

connectDB();

const server = new GraphQLServer({ typeDefs, resolvers });


server.express.use('/test', (req, res) => {
    res.json({
        message: 'Hello world'
    });
});

server.start(({ port }) => {
    console.log(`Server runing in port ${port}`);
});
