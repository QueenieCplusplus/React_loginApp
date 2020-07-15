// 2020, 7/14, pm 3:25
// ES6
// Redux: define action as util for reducer

// request
import axios from 'axios'

const Register_Success = 'success';
const Err_Msg = 'error';

// as same as in register.js
let initState = {
    redirctTo: '',
    username: '',
    password: '',
    pwdCfrm:'',
    msg:'',
    isOK: false // login or not
}

export function user(state=0, action){

    switch(action.type){
        case Register_Success:
            return {}; // to do
        case Err_Msg:
            return {}; // to do
        default: return state;
    }
}

function fail(msg){
    retrurn({
        msg,
        type: Err_Msg

    });
}

function succ(data){
    return({
        data,
        type: Register_Success
    });
}

// will load to register.js latter
export function register({username, password, pwdCfrm}){

    if(!username || !password){
        fail('plz enter both of your name and pwd.');
    }

    if(password !== pwdCfrm){
        fail('2 pwd are not matched. plz re-enter.')

    }

    return dispatch =>{

        axios.post('/user/register', {username, password, pwdCfrm})
            .then(res => {

                if(res.status === 200 && res.data.code === 0){

                    dispatch(succ(res.data.data))

                }else{

                    dispatch(res.data.msg)

                }

            })
    }

}

