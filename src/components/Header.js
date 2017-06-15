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
                <div className="row">
                    <div className="small-12 columns">
                        <h2>Welcome, {this.props.userName}</h2>
                    </div>
                </div>
                <ul id='dashboardHeader' className='filter-nav row'>
                    <li className='small-3 columns'><Link to='/rides/myrides'
                            className={this.state.activeTab === 'myrides'? 
                                "filter-nav-entry active":
                                "filter-nav-entry"}
                        ><button name='myrides' onClick={this.handleClick}>My Rides</button></Link></li>        
                    <li className='small-3 columns'><Link to='/rides/mydrives'
                            className={this.state.activeTab === 'mydrives'? 
                                "filter-nav-entry active":
                                "filter-nav-entry"}
                        ><button name='mydrives' onClick={this.handleClick}>My Drives</button></Link></li>        
                    <li className='small-3 columns'><Link to='/rides/findride'
                            className={this.state.activeTab === 'findride'? 
                                "filter-nav-entry active":
                                "filter-nav-entry"}
                        ><button onClick={this.handleClick} name='findride'>Find a Ride</button></Link></li>
                    <li className='small-3 columns'><Link to='/rides/offerride'
                            className={this.state.activeTab === 'offerride'? 
                                "filter-nav-entry active":
                                "filter-nav-entry"}
                        ><button onClick={this.handleClick} name='offerride'>Offer to Drive</button></Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;