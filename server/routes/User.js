const express = require('express');
const router = express.Router();
const { User } = require("../models");
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validateToken } = require("../middleware/AuthMiddleWare");

// Register a new user
router.post("/register", async (req, res) => {
    const { FName, LName, email, password } = req.body; // destructuring and getting all the values
    const alreadyPresent = await User.findOne({
        where: {
            email: email // check if the email is already present
        }
    });
    if (alreadyPresent) {
        res.json({ error: "User already exists" });
    } else {
        const hash = await bcrypt.hashSync(password, 10); // hash the password
        const NewUser = await User.create({ // create a new user from their details
            FName: FName,
            LName: LName,
            email: email,
            password: hash
        });
        res.json({ success: "User Created, Please Login" }); // Sending a success message to the client
    }
});
// The User has been registered, now he/she can login



// Login a user
router.post("/login", async (req, res) => {
    const { email, password } = req.body; // destructuring and getting all the values
    const user = await User.findOne({ // find the user with the email
        where: {
            email: email
        }
    });
    if (user != null) {
        const isMatch = await bcrypt.compareSync(password, user.password); // compare the password with the hash
        if (isMatch) {
            const accesstoken = sign({ // Making an accesstoken from the user details
                id: user.id,
                email: user.email,
                FName: user.FName,
                LName: user.LName
            }, "secretkey");
            res.json({
                accesstoken: accesstoken, // Sending the access token to the client
                user: { // Sending the user details to the client
                    id: user.id,
                    email: user.email,
                    FName: user.FName,
                    LName: user.LName
                }
            });
        } else {
            res.json({ error: "Wrong password" });
        }
    } else {
        res.json({ error: "User does not exist" });
    }
});
// Login Request Ends here



// Check if the user is logged in
router.get("/check", validateToken, async (req, res) => {
    res.json(req.user); // Sending the user details to the client
})
// Check Request Ends here


module.exports = router;