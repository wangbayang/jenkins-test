import React, {Component} from 'react'
import wrapWithUsername from '@/components/HOC/wrapWithUsername'

class Welcome extends Component {
  render () {
    return <div>Welcome {this.props.username}</div>
  }
}

Welcome = wrapWithUsername(Welcome)

export default Welcome