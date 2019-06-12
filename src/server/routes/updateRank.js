const express = require('express');
const updateRank = express.Router();
const { User } = require('../models/user');

updateRank.put('/:email', (req, res) => {
    const { email } = req.params;
    User.findOne({ email })
        .then(user => {
            user.count++;
            return user.save()
        })
        .then(updatedUser => {
            return User.updateMany({
                $and: [
                    { rank: { $lt: updatedUser.rank } },
                    {
                        $or: [
                            { count: { $lt: updatedUser.count } },
                            {
                                $and: [
                                    { count: updatedUser.count },
                                    { joinedDate: { $gt: updatedUser.joinedDate } }
                                ]
                            }
                        ]
                    }
                ]
            },
                { $inc: { rank: 1 } }
            );
        })
        .then(({ nModified }) => {
            return User.findOne({ email })
                        .then(user => {
                            user.rank -= nModified;
                            return user.save();
                        })
        })
        .then((user) => {
            res.json({ status: 'update rank successfully', user })
        })
        .catch(console.log);

})

module.exports = updateRank;