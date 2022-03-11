const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

const User = require('./../models/User');
const Token = require('./../models/Token');

router.post('/login', async (req, res) => {
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

    res.end();
});

router.post('/signup', async (req, res) => {
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

    res.end();
});

router.get('/logout', async (req, res) => {
    const { userId, tokenId } = req.cookies;
    res.clearCookie('userId');
    res.clearCookie('tokenId');
    await Token.findOneAndDelete({ userId, tokenId }).exec();
    res.end();
});

module.exports = router;