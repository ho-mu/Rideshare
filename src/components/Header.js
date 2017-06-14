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
                    <li className='small-4 columns'><Link to='/rides/myrides'
                            className={this.state.activeTab === 'myrides'? 
                                "filter-nav-entry active":
                                "filter-nav-entry"}
                            name='myrides'
                            onClick={this.handleClick}
                        ><button>My Rides</button></Link></li>        
                    <li className='small-4 columns'><Link to='/rides/findride'
                            className={this.state.activeTab === 'findride'? 
                                "filter-nav-entry active":
                                "filter-nav-entry"}
                            onClick={this.handleClick}
                            name='findride'
                        ><button>Find a Ride</button></Link></li>
                    <li className='small-4 columns'><Link to='/rides/offerride'
                            className={this.state.activeTab === 'offerride'? 
                                "filter-nav-entry active":
                                "filter-nav-entry"}
                            onClick={this.handleClick}
                            name='offerride'
                        ><button>Offer a Ride</button></Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;