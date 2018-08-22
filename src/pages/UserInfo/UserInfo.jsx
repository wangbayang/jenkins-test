import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '@/redux/actions/userInfo'

import userInfoCss from './UserInfo.scss'

class UserInfo extends Component {
  render () {
    const {isLoading, userInfo, errorMsg} = this.props.userInfo
    return (
      <div className={`${userInfoCss.userInfo} ${userInfoCss.test}`}>
        {
          isLoading ? '请求中' :
            (
              errorMsg ? errorMsg :
                <div>
                  <p>姓名：{userInfo.name}</p>
                  <p>介绍：{userInfo.intro}</p>
                </div>
            )
        }
        <button onClick={() => this.props.getUserInfo()}>请求</button>
      </div>
    )
  }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo)