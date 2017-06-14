import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HeaderContainer from './../containers/HeaderContainer';
import FilterContainer from './../containers/FilterContainer';
import FindRideContainer from './../containers/FindRideContainer';
import MyRideContainer from './../containers/MyRideContainer';
import MyDriveContainer from './../containers/MyDriveContainer';
import OfferRideContainer from './../containers/OfferRideContainer';
import { firebaseAuth } from '../config/constants'

const Dashboard = (props) => {
    return (
        <div>
            <HeaderContainer />
            <hr />
            <FilterContainer />
            <hr />
            <Route path='/rides/myrides' component={MyRideContainer} />
            <Route path='/rides/mydrives' component={MyDriveContainer} />
            <Route path='/rides/findride' component={FindRideContainer} />
            <Route path='/rides/offerride' component={OfferRideContainer} />
        </div>
    )
}

export default Dashboard;