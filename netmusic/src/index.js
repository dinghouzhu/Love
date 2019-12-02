import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import "lib-flexible"
import App from './App';
import store from './store'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import "./assets/fonts/iconfont.css"
ReactDOM.render(
    <Provider  store={store}>
       <App />
    </Provider>,
 document.getElementById('root'));
 store.subscribe(() => {
   ReactDOM.render(
       <Provider store={store}>
           <App />
       </Provider>, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
