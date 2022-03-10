const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
        default: ""
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function () {
    const Salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, Salt);
});

const User = mongoose.model('User', userSchema);
module.exports = User;