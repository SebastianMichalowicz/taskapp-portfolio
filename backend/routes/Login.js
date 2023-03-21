import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkEmail = await User.findOne({ email });
    if (!checkEmail)
      return res.status(400).send({
        message: "Invalid email",
      });
  } catch (err) {
    res.status(500).send(err.message);
  }
  User.findOne({ email})

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(password, user.password)

        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return res.status(400).send({
              message: "Passwords does not match",
            });
          }

          const secret = process.env.SECRET;
          //   create JWT token
          const token = jwt.sign(
            {
              username: user.username,
              _id: user._id,
              email: user.email,
            },
            secret,
            { expiresIn: "24h" }
          );
            
          //   return success response
          res.status(200).send(
            token,
          );
        })
        // catch error if password do not match
        .catch((err) => {
          res.status(400).send({
            message: "Passwords does not match",
            err,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      res.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

export { router as login };
