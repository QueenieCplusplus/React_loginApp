// 2020, 7/15, pm 2:20-
// to check whether user is login or not

import {Component} from 'react';
// checker is not router, 使用 withRouter 為跳轉畫面。
import {withRouter} from 'react-router-dom';
import axios from 'axios';

@withRouter
class Checker extends Component {

    componentDidMount(){

        /*if(filterCheck.indexOf(this.state.location.pathname) > -1){
            return
        }*/

        axios.get('/user/info').then(res => {

            if(res.status === 200){

                if(res.data.code === 0){

                    // show payload content body
                    this.state.getUserInfo(res.data.data)

                }else{
                    this.state.history.push('/login')
                }
            }
            
        })
    }

    render(){
        return null;
    }

}

export function getUserInfo(userInfo){
    return{
        type: 'Get_User_Info',
        payload: userInfo

    };
}

export default Checker;