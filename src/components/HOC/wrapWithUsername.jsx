import React, {Component} from 'react'

export default (WrappedComponent) => {
  class NewComponent extends Component {
    constructor (props) {
      super(props)
      this.state = {
        username: '默认'
      }
    }
    componentWillMount () {
      let username = localStorage.getItem('username')
      this.setState({
        username: username
      })
    }
    render () {
      return <WrappedComponent username={this.state.username} />
    }
  }
  return NewComponent
}