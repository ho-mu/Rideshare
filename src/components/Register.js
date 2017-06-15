import React, { Component } from 'react'
import { auth } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value, this.username.value)
      .then((res) => {
          this.props.setUser(this.username.value)
      })
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="small-6 columns">
              <label>Name</label>
              <input type='text' placeholder="First & Last" ref={(username) => this.username= username}/>
            </div>
          </div>
          <div className="row">
            <div className="small-6 columns">
              <label>Email</label>
              <input type='email' ref={(email) => this.email = email} placeholder="Email"/>
            </div>
          </div>
          <div className="row">
            <div className="small-6 columns">
              <label>Password</label>
              <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
            </div>
          </div>
          {
            this.state.registerError &&
            <div className="row">
              <div className="small-12 columns">
                <span aria-hidden="true"></span>
                <span className="notification-box alert">Error:
                &nbsp;{this.state.registerError}</span>
              </div>
            </div>
          }
          <div className="row">
            <div className="small-2 columns">
              <button type="submit">Register</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
