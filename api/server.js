const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./src/routes/routing');
const cors = require('cors');

require("dotenv").config();

const port = process.env.SERVER_PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);

app.listen(port, () => {
    console.log('listening on ' + port);
});

module.exports = app;
