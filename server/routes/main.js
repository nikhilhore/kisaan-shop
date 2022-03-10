const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

const User = require('./../models/User');
const Token = require('./../models/Token');

const loginRedirect = async (req, res, next) => {
    const { userId, tokenId } = req.cookies;
    const tokenExists = await Token.findOne({ userId, tokenId }).exec();
    if (tokenExists != null) {
        res.redirect('/dashboard');
        return;
    }
    next();
}

router.get('/', loginRedirect, async (req, res) => {
    res.render('welcome');
});

router.get('/login', loginRedirect, (req, res) => {
    res.render('login');
});

router.get('/signup', loginRedirect, (req, res) => {
    res.render('signup');
});

router.post('/login', loginRedirect, async (req, res) => {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email }).exec();
    if (userExists == null) {
        res.status(404).send({ message: "User does not exist." });
        return;
    }

    const isMatch = await bcrypt.compare(password, userExists.password);
    if (isMatch == false) {
        res.status(403).send({ message: "Wrong password!" });
        return;
    }

    const userId = userExists.userId;
    const tokenId = uuidv4();
    const token = new Token({ userId, tokenId });
    await Token.findOneAndDelete({ userId });
    res.cookie('userId', userId, { maxAge: 259200000, httpOnly: true });
    res.cookie('tokenId', tokenId, { maxAge: 259200000, httpOnly: true });
    await token.save();

    res.redirect('/dashboard');
});

router.post('/signup', loginRedirect, async (req, res) => {
    const { firstName, lastName, email, phone, password, cpassword } = req.body;

    if (firstName == '' || lastName == '' || email == '' || phone == '' || password == '') {
        res.status(400).send({ message: "All fields should be filled" });
    }
    const userExists = await User.findOne({ email }).exec();
    if (userExists != null) {
        res.status(409).send({ message: "User already exists." });
        return;
    }
    if (password !== cpassword) {
        res.status(400).send({ message: "Passwords do not match!" });
        return;
    }

    const userId = uuidv4();

    const payload = { userId, firstName, lastName, email, phone, password }
    const newUser = new User(payload);
    await newUser.save();

    res.redirect('/login');
});

module.exports = router;