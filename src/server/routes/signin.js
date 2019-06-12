const express = require('express');
const signin = express.Router();
const { User } = require('../models/user');

signin.post('/signin', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email, password })
        .then(user => {
            if (user) {
                res.status(200).json({status: 'sign in successfully', user});
            } else {
                res.status(400).json('wrong email or password')
            }
        })
        .catch(console.log);
})

module.exports = signin;