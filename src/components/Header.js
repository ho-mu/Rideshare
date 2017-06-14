import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    state = {
        activeTab:'myrides'
    }

    handleClick = (event) => {
        this.setState({
            activeTab:event.target.name
        })
    }

    render(){
        return (
            <div>
                <h2>Welcome, {this.props.userName}</h2>
                <ul id='dashboardHeader' className='filter-nav row'>
                    <li className={this.state.activeTab === 'myrides'? 
                            "filter-nav-entry active small-4 columns":
                            "filter-nav-entry small-4 columns"}
                        ><Link to='/rides/myrides'><button name='myrides' onClick={this.handleClick}>My Rides</button></Link></li>        
                    <li className={this.state.activeTab === 'findride'? 
                            "filter-nav-entry active small-4 columns":
                            "filter-nav-entry small-4 columns"}
                        ><Link to='/rides/findride'><button name='findride' onClick={this.handleClick}>Find a Ride</button></Link></li>
                    <li className={this.state.activeTab === 'offerride'? 
                            "filter-nav-entry active small-4 columns":
                            "filter-nav-entry small-4 columns"}
                        ><Link to='/rides/offerride'><button name='offerride' onClick={this.handleClick}>Offer a Ride</button></Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;