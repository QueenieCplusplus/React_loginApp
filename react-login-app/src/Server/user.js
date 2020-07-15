// 2020, 7/15, pm 2
// using router software of express middleware

const express = require('express')

const Router = express.Router();

// util for Login module in containers.js  
Router.get('/info', (req, res) => {
    return res.json({code:1, msg:'not yet login'})
})

module.exports = Router;
