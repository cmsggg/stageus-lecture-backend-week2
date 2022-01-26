const express = require('express');
const httpPort = 8000;

const app = express();
app.use(express.json());


const pagesApi = require('./router/pages');
app.use('/', pagesApi);

const accountApi = require('./router/account');
app.use('/account', accountApi);


// HTTP Server listen API
app.listen(httpPort, (req, res) => {
    console.log("HTTPS Server Started : Port " + httpPort);
});