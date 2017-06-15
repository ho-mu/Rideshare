import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import LoginContainer from './../containers/LoginContainer'
import RegisterContainer from './../containers/RegisterContainer'
import Dashboard from './Dashboard';
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'
import './../styles/styles.css'
const database = require('./../helpers/firebase.js');
const logo = require('./../../public/logo.png')


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
        : <Redirect to='/rides/myrides' />}
    />
  )
}




export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {


      //load data on iniitial mount of app
         database.subscribeToTripChanges((trips)=>{
            const newTrips = Object.keys(trips.val()).map((tripKey=>{
              const newTrip = {...trips.val()[tripKey]}
                if (!newTrip.passengers)
                  //if passengers isn't here, add it as an empty array....
                  //is this a hack?????
                
                  newTrip.passengers = []
                return newTrip
            }))
            this.props.loadAllTrips(newTrips)
            
        })


    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (firebaseAuth().currentUser){
        //set the redux store!!!
        this.props.setUser(firebaseAuth().currentUser.displayName)
      }
      
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
    return this.state.loading === true ? <span className="loading-indicator small"></span> : (
      <BrowserRouter>
        <div id='app'>
          <div className='row'>
            <nav>
              <ul className="heading-nav bg-black padding-medium ghost">
                <li className="heading-nav-entry">
                  <img style={{"height" : "50px", "marginRight" : "15px"}} src={logo} alt="logo"/>
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
                  <li className="heading-nav-entry title">NM Rideshare</li>
              </ul>
            </nav>
          </div>
          <div className="container">
            <div className="row">
              <Switch>
                <PrivateRoute path='/' exact component={Dashboard} />
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
