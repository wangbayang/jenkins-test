import React, {Component} from 'react'

import style from './Grid.scss'

export default class Grid extends Component {
  render () {
    return (
      <div className={style.container}>
        <div className={style.header}>header</div>
        <div className={style.menu}>menu</div>
        <div className={style.content}>content</div>
        <div className={style.footer}>footer</div>
      </div>
    )
  }
}