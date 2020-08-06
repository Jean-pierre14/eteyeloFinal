const express = require("express");
const mongoose = require('mongoose')
const {
    success,
    error
} = require("consola");
const users = require('./models/User')

const PORT = 7000;
const app = express();


// DB config
const db = require('./config/key').MongoURI
mongoose.connect(db, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    .then(() => success({
        message: `Mongodb connected ${db}`,
        badge: true
    }))
    .catch((err) => error({
        message: `${err}`,
        badge: true
    }))

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get('/register', (req, res) => {
    res.send('Register')
})
app.get('/viwes', (req, res) => {
    res.send('views')
})

app.use((req, res) => {
    res.send('404\n Page not found');
})

app.listen(PORT, (err) => {
    if (err)
        error({
            message: `${err}`,
            badge: true,
        });
    success({
        message: `Server run on port: ${PORT}`,
        badge: true,
    });
});