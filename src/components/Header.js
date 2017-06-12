import React, { Component } from 'react';

const Header = (props) => {

    return (
        <div>
            <h1>NM Rideshare</h1>
            <ul id='dashboardHeader' className='filter-nav row'>
                <li className="filter-nav-entry small-4 columns"><button>Find a Ride</button></li>
                <li className="filter-nav-entry small-4 columns"><button>Offer a Ride</button></li>
                <li className="filter-nav-entry small-4 columns"><button>My Rides</button></li>        
            </ul>
        </div>
    )
}

export default Header;