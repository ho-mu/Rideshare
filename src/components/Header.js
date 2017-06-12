import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {

    return (
        <div>
            <h1>NM Rideshare</h1>
            <ul id='dashboardHeader' className='filter-nav row'>
                <li className="filter-nav-entry small-4 columns"><Link to='/rides/findride'><button>Find a Ride</button></Link></li>
                <li className="filter-nav-entry small-4 columns"><Link to='/rides/offerride'><button>Offer a Ride</button></Link></li>
                <li className="filter-nav-entry small-4 columns"><Link to='/rides/myrides'><button>My Rides</button></Link></li>        
            </ul>
        </div>
    )
}

export default Header;