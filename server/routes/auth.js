const express = require('express');
const router = express.Router();

const User = require('./../models/User');
const Token = require('./../models/Token');

router.get('/logout', async (req, res) => {
    const { userId, tokenId } = req.cookies;
    res.clearCookie('userId');
    res.clearCookie('tokenId');
    await Token.findOneAndDelete({ userId, tokenId }).exec();
    res.redirect('/');
});

module.exports = router;