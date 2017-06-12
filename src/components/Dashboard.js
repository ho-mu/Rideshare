import React, { Component } from 'react';
import Header from './Header';
import FindRide from './FindRide';
import MyRides from './MyRides';

const Dashboard = (props) => {

    return (
        <div>
            <Header />
            <FindRide />
            <MyRides />
        </div>
    )
}

export default Dashboard;