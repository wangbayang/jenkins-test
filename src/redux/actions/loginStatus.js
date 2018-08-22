export const LOGIN = "loginStatus/LOGIN"
export const LOGOUT = "loginStatus/LOGOUT"

export function login () {
  return {type: LOGIN}
}

export function logout () {
  return {type: LOGOUT}
}