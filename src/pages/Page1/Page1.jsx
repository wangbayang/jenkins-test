import React, {Component} from 'react'

import page1Css from './Page1.scss'

import image1 from './images/1.png'
import image2 from './images/2.png'

export default class Page1 extends Component {
  render () {
    return (
      <div className={page1Css.page1X}>
        This is Page1
        <p>haha</p>
        <img src={image1} />
        <img src={image2} />
      </div>
    )
  }
}