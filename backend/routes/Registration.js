import express from 'express';
import User from '../models/User.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const router = express.Router();

router.post("/",async (req, res) => {
    const {username, email, password} = await req.body;

    try {
        const checkUser = await User.findOne({username});
        if(checkUser) return res.status(400).send({
            message: "User with this username exist, please try with other username",
        });
        const checkEmail = await User.findOne({email});
        if(checkEmail) return res.status(400).send({
            message: "User with this email exist, please try with other email",
        });
    } catch (err) {
        res.status(500).send(err.message);
    };

    bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
        const user = new User({
        username,
        email,
        password: hashedPassword,
    });

    const secret = process.env.SECRET;
    //   create JWT token
    const token = jwt.sign(
        {
            _id: user._id,
            username: user.username,
            email: user.email,
        },
            secret,
            { expiresIn: "24h" }
        );

    user.save();

    res.send(token);
    })
});

export {router as registration};