/* jshint esversion: 10*/
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const customers = require('./routes/customers');
const home = require('./routes/home');
const logger = require('./middleware/logger');
const app = express();
const mongoDb = 'mongodb://localhost/customerApi';

mongoose.connect(
    mongoDb,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log('Customer Api db Connected')).catch((err) => console.log(err.message));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(helmet());

app.use(logger);
app.use('/api/customers',customers);
app.use('/',home);
app.use(morgan('tiny'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));