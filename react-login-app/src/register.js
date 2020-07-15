// 2020, 7/15, am 9:55-
//ES6
//UI

import React, {Component} from 'react';
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from "antd-mobile";
// logo file path 

// to register the bindup event
import {connect} from 'react-redux';
import {register} from './user.redux';

//@ only support by 的plugins transform-decorators-legacy
// remember to setup the preference of VScode
@connect(
    state => state,
    {register}

)

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            pwdCfrm:''
        }
    }

    render(){
        return
            <div>
                <List>
                    <InputItem onChange = {value => this.changeHandler('username', value)}> Account Name </InputItem>
                    <InputItem onChange = {value => this.changeHandler('password', value)}> Password </InputItem>
                    <InputItem onChange = {value => this.changeHandler('pwdCfrm', value)}> Confirm Password </InputItem>
                </List>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary">Login</Button>
                    <WhiteSpace/>
                    <Button onClick={this.loginGoer.bind(this)} type="primary">
                        
                        Got account already, plz let me log in.

                    </Button>
                </WingBlank>
            </div>
    }

    loginGoer(){

        this.state.history.push('/login');

    }

    changeHandler(k, v){
        this.setState({[k]:v});
    }

    // connection
    registerHandler(){
        this.state.register(this.state)
    }
}

export default Register;