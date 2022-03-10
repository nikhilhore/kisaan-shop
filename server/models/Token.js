const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    tokenId: {
        type: String,
        required: true
    }
});

tokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 259200 });

const Token = mongoose.model('Token', tokenSchema);
module.exports = Token;