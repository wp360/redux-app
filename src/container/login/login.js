import React from 'react'
import Logo from '../../component/logo/logo'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'

@connect(
  state=>state.user,
  { login }
)

class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  register() {
    console.log(this.props)
    this.props.history.push('/register')
  }

  handleChange(key, val) {
    this.setState({
      [key]:val
    })
  }

  handleLogin() {
    // 此处login由redux提供
    this.props.login(this.state)
  }

  render() {
    const titleStyle = {
      textAlign: 'center'
    }
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
        <Logo />
        <h2 style={titleStyle}>登录页</h2>
        <WingBlank>
          <List>
            {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
            <InputItem onChange={v=>this.handleChange('user', v)}>用户</InputItem>
            <WhiteSpace />
            <InputItem type='password' onChange={v=>this.handleChange('pwd', v)}>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type='primary' onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button type='primary' onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
