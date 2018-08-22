import {LOGIN, LOGOUT} from '@/redux/actions/loginStatus'

export default function reducer (state = {status: '未登录'}, action) {
  switch(action.type) {
    case LOGIN:
      return {
        status: '已登陆'
      }
    case LOGOUT:
      return {
        status: '未登陆'
      }
    default:
      return state
  }
}