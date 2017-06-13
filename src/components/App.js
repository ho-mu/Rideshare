import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import LoginContainer from './../containers/LoginContainer'
import RegisterContainer from './../containers/RegisterContainer'
import Home from './Home'
import Dashboard from './Dashboard';
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'
import './../styles/styles.css'


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/rides' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }


  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div id='app'>
          <div className='row'>
          <nav>
              <ul className="heading-nav bg-black padding-medium ghost">
                <li className="heading-nav-entry active">
                  <Link to="/">Home</Link>
                </li>
                <li className="heading-nav-entry">
                  <Link to="/rides/myrides">Dashboard</Link>
                </li>
                {this.state.authed
                  ?
                  <li className="heading-nav-entry">
                    <button onClick={() => {logout()}}>Logout</button>
                  </li>
                  : <span>
                      <li className="heading-nav-entry">
                        <Link to="/login">Login</Link>
                      </li>
                      <li className="heading-nav-entry">
                        <Link to="/register">Register</Link>
                      </li>
                    </span>}
                    <li className="title">NM Rideshare</li>
              </ul>
          </nav>
          </div>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/login' component={LoginContainer} />
                <PublicRoute authed={this.state.authed} path='/register' component={RegisterContainer} />
                <PrivateRoute authed={this.state.authed} path='/rides' component={Dashboard} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
