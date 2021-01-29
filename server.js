require('dotenv').config()
require('colors');
const express = require("express");

const cors = require('cors');
const connectDB = require('./dbinit');
const restaurants = require('./api/restaurants');
const tags = require('./api/tags');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();


app.use(cors());
app.use(express.json());
app.use('/restaurant', restaurants);
app.use('/tag', tags);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Started server on port ${PORT}`.rainbow.bold.inverse));

