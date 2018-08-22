import React, {Component} from 'react'
import {increment, decrement, reset} from '@/redux/actions/counter'
import {login, logout} from '@/redux/actions/loginStatus'

import {connect} from 'react-redux'

class Counter extends Component {
  componentDidMount () {
    function welcome (username) {
      console.log('welcome', username)
    }
    function goodbye (username) {
      console.log('goodbye', username)
    }
    function study (username) {
      console.log('study', username)
    }
    function wrapWithUsername (wrappedFunc) {
      let newFunc = () => {
        let username = localStorage.getItem('username')
        wrappedFunc(username)
      }
      return newFunc
    }
    welcome = wrapWithUsername(welcome)
    goodbye = wrapWithUsername(goodbye)
    study = wrapWithUsername(study)
    welcome()
    goodbye()
    study()
  }
  render () {
    return (
      <div>
        <div id='test'>当前计数为{this.props.counter.count}</div>
        <button onClick={() => this.props.increment()}>自增</button>
        <button onClick={() => this.props.decrement()}>自减</button>
        <button onClick={() => this.props.reset()}>重置</button>
        <div>当前状态为{this.props.loginStatus.status}</div>
        <button onClick={() => this.props.login()}>登陆</button>
        <button onClick={() => this.props.logout()}>登出</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    loginStatus: state.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    },
    login: () => {
      dispatch(login())
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)