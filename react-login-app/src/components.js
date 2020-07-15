// 2020, 7/14, pm 3:30 

// ES6

// 元件物件定義

import {Component} from 'react';
import {withRouter} from 'react-router-dom';

class CheckLogin extends Component{

    componentDidMount(){

        // check user login or not
        axios.get('Kate Chen').then( res =>{

            if(res.status === 200){

                if(res.data.code === 0){


                }else{

                    this.state.history.push('/login');
                    // or using this.props.history.push();

                }
            }
        });

    }

    render(){
        return null;
    }

}

export default CheckLogin;