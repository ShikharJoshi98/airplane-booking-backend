const express = require('express');
const { serverConfig, logger } = require('./config');

const app = express();
const PORT = serverConfig.PORT;

app.listen(PORT, () => {
    logger.info(`Server listening on ${PORT}`);
})