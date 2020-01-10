const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '../', 'public', 'client', 'build')));
app.use(express.static(path.join(__dirname, '../', 'public')));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection established")
})

const mainRouter = require('./routes/main');
const childRouter = require('./routes/child');
const parentRouter = require('./routes/parent');

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '../', 'public', 'views', 'index.ejs'));
})

app.get('/login', (req, res) => {
    res.render(path.join(__dirname, '../', 'public', 'views', 'login.ejs'));
})

app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'public', 'client', 'build', 'index.html'));
})

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => { console.log(`App started on port ${port}`) });
