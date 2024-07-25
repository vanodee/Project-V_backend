import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('projects.json'); // Path to your JSON file
const middlewares = jsonServer.defaults();

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type']
};


server.use(cors(corsOptions));
server.use(middlewares);

server.use(
    // Add custom route here if needed
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);

server.use(router);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});

export default server;