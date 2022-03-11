const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;
const url = process.env.MONGO_URI;
const User = require('./models/User');
const Token = require('./models/Token');

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err);
    else console.log('Connected to mongo Database');
});

app.get('/authenticate', (req, res) => {
    const { userId, tokenId } = req.cookies;
    const tokenExists = await Token.findOne({ userId, tokenId }).exec();
    let valid = false;
    if (tokenExists != null) valid = true;
    const user = await User.findOne({ userId }).exec();
    res.send({ user, valid });
});

app.use('/', require('./routes/main'));

app.use('/', require('./routes/auth'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});