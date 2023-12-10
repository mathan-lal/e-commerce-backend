import {Schema, model} from "mongoose";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },

    phone: {
        type: Number,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

}, {timestamps: true});

userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// in userSchema we have object which is methods, we can add any method in this method object
userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

//now we generate access token
userSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
        _id: this._id,
        email: this.email,
        username: this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    );

    userSchema.methods.generateRefreshToken = function () {
        jwt.sign(
            {
                _id: this._id
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY
            }
        )
    }
} 

export const User = model('User', userSchema);