const express = require('express');

const { ServerConfig } = require("./config");
const logger = require('./utils/logger');
const errorHandler = require('./middlewares/errorHandler');
const userRoutes = require('./routes/user-routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use('/', (req, res) => {
//      res.send('Test Api')
// })
app.use('/v1/api', userRoutes);

app.use(errorHandler);

app.listen(ServerConfig.PORT, () => {
    logger.info(`Server listening on ${ServerConfig.PORT}`)
})