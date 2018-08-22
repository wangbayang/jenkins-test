export const INCREMENT = "test/INCREMENT"
export const DECREMENT = "test/DECREMENT"
export const RESET = "test/RESET"

export function increment () {
  return {type: INCREMENT}
}
export function decrement () {
  return {type: DECREMENT}
}
export function reset () {
  return {type: RESET}
}