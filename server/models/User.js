const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    birth: {
        type: Date,
    },
    phone_number: {
        type: String
    },
    id: {
        type: String,
    },
    password: {
        type: String,
        minglength: 8,
    },
    username: {
        type: String,
        maxlength: 10
    },
    token:{
        type:String
    }
})
userSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(20, (err, salt) => {
            if (err) {
                return next(err);
            } else {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) {
                        return next(err);
                    } else {
                        user.password = hash;
                        next();
                    }
                })
            }
        })
    } else {
        next();
    }
})
userSchema.methods.checkPassword = function (plainPassword, cb) {
    var user = this;
    bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
        if (err) {
            return cb(err)
        } else {
            return cb(null, isMatch)
        }
    })
}
userSchema.methods.createToken = function (cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), "P@ssw0rd");
    user.token = token;
    user.save((err, user) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null, user);
        }
    })
}
userSchema.statics.findByToken = function (token, cb) {
    var user = this;
    jwt.verify(token, 'P@ssw0rd', (err, decode) => {
        user.findOne({ "_id": decode, "token": token }, (err, user) => {
            if (err) {
                return cb(err)
            } else {
                cb(null, user);
            }
        })
    })
}

const User = mongoose.model('User', userSchema);

module.exports = { User }