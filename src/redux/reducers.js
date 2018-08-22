import {combineReducers} from 'redux'

import counter from './reducers/counter'
import test from './reducers/test'
import loginStatus from './reducers/loginStatus'
import userInfo from './reducers/userInfo'

export default combineReducers({
  counter,
  loginStatus,
  userInfo
})