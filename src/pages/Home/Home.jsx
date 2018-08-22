import React, {Component} from 'react'
import {hot} from 'react-hot-loader'

import Calendar from '@/components/Calendar/Calendar'

import './Home.scss'

class Home extends Component {
  render () {
    return (
      <div className='base-layout'>
        <Calendar />
      </div>
    )
  }
}

export default hot(module)(Home)