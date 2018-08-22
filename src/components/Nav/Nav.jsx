import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => (
  <ul>
    <li><Link to="/">首页</Link></li>
    <li><Link to="/page1">Page1</Link></li>
    <li><Link to="/counter">Counter</Link></li>
    <li><Link to="/userinfo">UserInfo</Link></li>
  </ul>
)

export default Nav