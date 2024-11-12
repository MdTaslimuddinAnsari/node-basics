const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
dotenv.config();
const postRoutes = require('./routes/post');
const expressValidator = require('express-validator');

// DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.error(`DB connection error: ${err.message}`);
    });

mongoose.connection.on("error", err => {
    console.error(`DB connection error: ${err.message}`);
});

// middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use("/", postRoutes);




const port = process.env.port || 8080
app.listen(port, () => {
    console.log(`Api is running at port number: ${port}`)
});