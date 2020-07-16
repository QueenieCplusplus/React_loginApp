// 2020, 7/16, am 8:40-
// connect to MongoDB

const mongoose = require('mongoose');

// connect to DB and create the Set
mongoose.connect('mongodb://localhost:27017/react-login-app');

// print status
mongoose.connection.on('connected', () => {

    console.log("your app is connecting with DB now.");

})

// data model
const models = {
    user:{
        'username':{type: String, require: true},
        'password':{type: String, require: true}
    }
}

// Loop
for(let m in models){
    // model(name: string, schema: any)
    mongoose.model(m, new mongoose.Schema(models[m]));
}

// export 
module.exports = {
    getModel(m){
        return mongoose.model(m)
    }
}