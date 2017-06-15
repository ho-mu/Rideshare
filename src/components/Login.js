import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .then((res) => {
          this.props.setUser(res.displayName)
      })
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="small-6 columns">
            <label>Email</label>
            <input type='email' placeholder="Email" ref={(email) => this.email = email}/>
          </div>
        </div>
        <div className="row">
          <div className="small-6 columns">
            <label>Password</label>
            <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
        </div>
          {
            this.state.loginMessage &&
            <div className="row">
              <div className="small-12 columns">     
                <span aria-hidden="true"></span>
                <span className="notification-box alert">Error:
                &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword}>Forgot Password?</a></span>
              </div>
            </div>
          }
          <div className="row">
            <div className="small-2 columns">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
