import React, {Component} from 'react'
import wrapWithUsername from '@/components/HOC/wrapWithUsername'

class Goodbye extends Component {
  render () {
    return <div>Goodbye {this.props.username}</div>
  }
}

Goodbye = wrapWithUsername(Goodbye)

export default Goodbye