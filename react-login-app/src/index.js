// 2020, 7/14, pm 3:00 - 3:15
// 2020, 7/14, pm 3:45 - 4:00

// ES6
// npm install create-react-app -g
// create-react-app {app name}
// component 元件
// container 頁面
// redux 元素集合，包含 reducer 和定義 actions

import React from 'react';
import ReactDOM from 'react-dom';

// this middleware can do asyn task
import thunk from 'redux-thunk';

// store
import {createStore, compose, applyMiddleware} from 'redux';

// pass data to store using provider
import {Provider} from 'react-redux';

// router components
import {BrowserRouter as Router, Route} from 'react-router-dom';

// self-defined Components
import CheckLogin from './components';
//import CheckLogin from './components/CheckLogin';
//import {CheckLogin} from './components/CheckLogin';

// self-defined Containers
import Login from './containers';
import Register from './containers2';

// reducer
import reducer from './reducer';

// store obj
const store = createStore(reducer, compose(

    applyMiddleware(thunk),
    // crome console dev tools
    window.devToolsExtensions? window.devToolsExtension() : f => f
    //從控制檯，可以看到redux相關資訊（user: 定義的reducer user 值是返回state的初始值0）
    //PS：前提是chrome安裝redux外掛Redux DevTools

))

// render(ele, container|fragment, callback)
// bug issued at 11:20 on 7/15
/* Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
 1. You might have mismatching versions of React and the renderer (such as React DOM)
 2. You might be breaking the Rules of Hooks
 3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.*/
// debug report at 11:20 on 7/15
/* my react-dom version is 16.13.1 
  this version is upper than 16.8.0
  support the hook */

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <div className = "react-login-app">  
                <CheckLogin></CheckLogin>
                <Route path='/login' component={Login}></Route>
                <Route path='/singup' component={Register}></Route>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)






