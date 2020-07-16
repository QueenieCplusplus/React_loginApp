//2020. 7/15, am 9:10-9:20(10 mins)
//ES6
//UI

import React, {Component} from 'react';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
// logo file path 
// call actions creator
import {connect} from 'react-redux'

@connect(
    state => state,
    {login}
)

class Login extends Component{

    render(){

        return(

            <div className="login-page">
                <WhiteSpace/>
                <WhiteSpace/>
                <List>
                    <InputItem> Account Name </InputItem>
                    <InputItem> Password </InputItem>
                </List>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary" onClick={this.loginHandler}>Login</Button>
                    <WhiteSpace/>
                    <Button onClick={this.RegisterGoer.bind(this)} type="primary">Sign Up</Button>
                </WingBlank>
            </div>
        );
    }

    // see use.redux.js
    loginHandler(){
        this.state.login(this.state);
    }

    // user surf on the url path /signup 
    // then go to Register module 
    // this method called is for Login -> Register
    RegisterGoer(){
        this.state.history.push('/signup');
    }
}

export default Login;