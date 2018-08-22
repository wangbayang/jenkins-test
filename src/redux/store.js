import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import combineReducers from './reducers.js'

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware))

if (module.hot) {
  module.hot.accept("./reducers", () => {
    const NextCombineReducers = require("./reducers").default
    store.replaceReducer(NextCombineReducers)
  })
}

export default store