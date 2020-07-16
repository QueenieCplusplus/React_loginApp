// 2020, 7/15, pm 2
// using router software of express middleware

const express = require('express')
const Router = express.Router();

// 2020, 7/16, am 8:50
// connect to model of MongoDB
const model = require('./model');
const User = model.getModel('user');

// check login or not
// util for Login module in containers.js  

Router.get('/info', (req, res) => {
    
    // after usage of res.cookies in post for login page
    const{UserId} = req.cookies

    if(! userId){
        res.json({code: 1, msg: 'user never log in before.'})
    }

    User.findOne({_id: userId}, _filter, (err, doc) => {

        if(err){
            return res.json({code: 1, msg: 'server-side error occurs.'})
        }

        if(doc){
            return res.json({code: 0, msg: 'thanks for login again.'})
        }
    })
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


// other usage: filter
const _filter = {"__v": 0, "password": 0};

// other usage: Cipher
function md5_creator(password){
    const hashcode = 'akdf352FHhjfFHI34=123-`[email protected]!*@%!^';
    return utils.md5(utils.md5(hashcode + password));
}

// log in
Router.post('login', (req, res) => {

    const {username, password} = req.body
    console.log(username);

    User.findOne({username, password: md5_creator(password)}, _filter, (err, doc) =>{

        if(!doc){

            return res.json({code:1, msg: 'password is invalid.'})

        }

        if(err){

            return res.json({code: 1, msg:'server-side error occurs.'})

        }

        res.cookie('userId', doc._id) // log in success, and save the id
        return res.json({code: 0, msg:'login success', data: doc})

    });

})

module.exports = Router;
