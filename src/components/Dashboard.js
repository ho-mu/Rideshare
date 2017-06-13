import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HeaderContainer from './../containers/HeaderContainer';
import FindRide from './FindRide';
import MyRides from './MyRides';
import OfferRide from './OfferRide';
import { firebaseAuth } from '../config/constants'

const Dashboard = (props) => {
    return (
        <div>
            <HeaderContainer />
            <Route path='/rides/myrides' component={MyRides} />
            <Route path='/rides/findride' component={FindRide} />
            <Route path='/rides/offerride' component={OfferRide} />
        </div>
    )
}

export default Dashboard;