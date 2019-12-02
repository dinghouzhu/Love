import reducer from '../reducers/index'
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
// import {logger} from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))