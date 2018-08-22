export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST"
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS"
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL"

function getUserInfoRequest () {
  return {
    type: GET_USER_INFO_REQUEST
  }
}

function getUserInfoSuccess (userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: userInfo
  }
}

function getUserInfoFail () {
  return {
    type: GET_USER_INFO_FAIL
  }
}

async function login () {
  const result = await toLogin()
  console.log(result)
}

export function getUserInfo () {
  return function (dispatch) {
    dispatch(getUserInfoRequest())
    return fetch('http://192.168.2.51:4000/api/user.json')
      .then(response => response.json())
      .then(json => dispatch(getUserInfoSuccess(json)))
      .catch(() => dispatch(getUserInfoFail()))
  }
}