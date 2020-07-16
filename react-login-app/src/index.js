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
import Checker from './checker';
//import CheckLogin from './components/CheckLogin';
//import {CheckLogin} from './components/CheckLogin';

// self-defined Containers
import Login from './containers';
import Register from './containers2';

// reducer
import reducer from './reducer';

// store obj as Hook
const store = createStore(reducer, compose(

    applyMiddleware(thunk),
    // crome console dev tools
    window.devToolsExtensions? window.devToolsExtension() : f => f
    //從控制檯，可以看到redux相關資訊（user: 定義的reducer user 值是返回state的初始值0）
    //PS：前提是chrome安裝redux外掛Redux DevTools

))

// render(ele, container|fragment)
// need debug
/*You can only call Hooks (const store) while React is rendering a function component:
✅ Call them at the top level in the body of a function component.
✅ Call them at the top level in the body of a custom Hook.*/
ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <div className = "react-login-app">  
                <Checker></Checker>
                <Route path='/login' component={Login}></Route>
                <Route path='/singup' component={Register}></Route>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)




