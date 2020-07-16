// 2020, 7/15, pm 2
// using router software of express middleware

const express = require('express')
const Router = express.Router();

// 2020, 7/16, am 8:50
// connect to model of MongoDB
const model = require('./model');
const User = model.getModel('user');

// util for Login module in containers.js  
Router.get('/info', (req, res) => {
    return res.json({code:1, msg:'not yet login'})
})

// get users detail
Router.get('/list', (req, res) => {

    User.find({}, (err, doc) => {

        if(!err){
            return res.json({code:0, data: doc, msg:'get user data in success.'})
        }

    })

})

// sign up
Router.post('/signup', (req, res) =>{

    const {username, password} = req.body;

    // findOne(condition, callback)
    User.findOne({username}, (err, doc) =>{

        if(err){
            return res.json({code:1, msg:'server side error occurs!'})

        }

        if(doc){
            return res.json({code:1, msg:'user already exists...'})
        }

        User.create({}, (err, doc) => {

            if(err){
                return res.json({code:1, msg: 'server side error occurs.'})
            }

            return res.json({code: 0, data: doc})

        })

    })

})

// other usage: Cipher
function md5_creator(password){
    const hashcode = 'akdf352FHhjfFHI34=123-`[email protected]!*@%!^';
    return utils.md5(utils.md5(hashcode + password));
}

// other usage: filter
const _filter = {"__v": 0, "password": 0};

module.exports = Router;
