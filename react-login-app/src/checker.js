// 2020, 7/15, pm 2:20-
// to check whether user is login or not

import {Component} from 'react';
// checker is not router, 使用 withRouter 為跳轉畫面。
import {withRouter} from 'react-router-dom';

@withRouter
class Checker extends Component {

    componentDidMount(){

        if(filterCheck.indexOf(this.state.location.pathname) > -1){
            return
        }

        axios.get('/user/info').then(res => {

            if(res.status === 200){

                if(res.data.code === 0){

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

export default Checker;