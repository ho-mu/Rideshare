import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import FindRide from './FindRide';
import MyRides from './MyRides';
import OfferRideContainer from './../containers/OfferRideContainer';
import { firebaseAuth } from '../config/constants'

const Dashboard = (props) => {
    return (
        <div>
            <Header />
            <Route path='/rides/myrides' component={MyRides} />
            <Route path='/rides/findride' component={FindRide} />
            <Route path='/rides/offerride' component={OfferRideContainer} />
        </div>
    )
}

export default Dashboard;