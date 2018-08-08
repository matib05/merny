const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items')

const app = express();
app.use(bodyParser.json());
const router = express.Router();
app.use(router);

app.use('/routes/api', items);

mongoose
    .connect("mongodb://matib05:armpit1117@ds263161.mlab.com:63161/mern-stack", { useNewUrlParser: true })
    .then(() => console.log('connected to mongodb server'))
    .catch((err) => console.log(err, `mongoUri: ${db}`));

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server started on port ${port};`));