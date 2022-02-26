require('dotenv').config();
const connectDB = require('./src/config/dbConnect');
const express = require('express');
const mongoose = require('mongoose');
const run = require('./src/controllers/person')
// const Route = require('./src/routes');


connectDB();
const app = express();
const port = 3000;
// const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

run();
// app.use('/', Route(router));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server running on port 3000'))
})