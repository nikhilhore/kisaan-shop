const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    tokenId: {
        type: String,
        required: true
    },
    expire_at: {
        type: Date,
        expires: 259200,
        default: Date.now
    }
});

const Token = mongoose.model('Token', tokenSchema);
module.exports = Token;