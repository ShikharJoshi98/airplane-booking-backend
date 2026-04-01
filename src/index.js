const express = require('express');

const { serverConfig, logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();
const PORT = serverConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    logger.info(`Received ${req.method} request to ${req.url}`);
    next();
});

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    logger.info(`Server listening on ${PORT}`);
})