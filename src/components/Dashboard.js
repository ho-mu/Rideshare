import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HeaderContainer from './../containers/HeaderContainer';
import FindRideContainer from './../containers/FindRideContainer';
import MyRideContainer from './../containers/MyRideContainer';
import OfferRideContainer from './../containers/OfferRideContainer';
import { firebaseAuth } from '../config/constants'

const Dashboard = (props) => {
    return (
        <div>
            <HeaderContainer />
            <Route path='/rides/myrides' component={MyRideContainer} />
            <Route path='/rides/findride' component={FindRideContainer} />
            <Route path='/rides/offerride' component={OfferRideContainer} />
        </div>
    )
}

export default Dashboard;