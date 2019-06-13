const express = require('express');
const register = express.Router();
const { User } = require('../models/user');

register.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email })
        .then(user => {
            if (user) {
                return Promise.reject('user existed')
            } else {
                return User.find();
            }
        })
        .then(users => {
            rank = users.length + 1;
            newUser = new User({ name, email, password, rank });
            return newUser.save();
        })
        .then(user => {
            res.status(200).json({ status: 'registered successfully', user });
        })
        .catch((err) => {
            res.status(400).json(err)
        });
})

module.exports = register;