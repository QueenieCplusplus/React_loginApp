// 2020, 7/15, pm 1:45-
// server-side code
// below is node listener
// cd to this folder called Server
// sudo chown -R $USER /usr/local/lib/node_modules
// execute npm install nodemon -g 
// execute nodemon server.js

// 2020, 7/16, am 10:10
// to use cookie plugin
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// hook
const express = require('express');
const userRouter = require('./user');

// app hook
const app = express();
app.use('/user', userRouter)

app.listen(8000, () => {
    'client port 3000, and server port 8000!'
})