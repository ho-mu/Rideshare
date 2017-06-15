const database = require('./../helpers/firebase.js');

import React, { Component } from 'react';
let dateFormat = require('dateformat');



class OfferRide extends Component {

    state = {
        maxSeats:1,
        notes:'',
        submitMsg:null
    }

    closeSubmit = (event) => {
        this.setState({
            submitMsg:null
        })
    }

    handleChange = (event) => {
        const { name,value } = event.target;
        this.setState({
            [name]:value,
            submitMsg:null
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        let idList = this.props.trips.map((trip) => {
            return Number(trip.id);
        })
        let id = Math.max(...idList) + 1;
        this.props.addTrip({
            date:this.props.filter.date,
            time:this.props.filter.time,
            driver:this.props.username,
            destination:this.props.filter.destination,
            maxSeats:this.state.maxSeats,
            passengers:[],
            notes:this.state.notes,
            id
        })

        database.addNewTrip({
            date:this.props.filter.date,
            time:this.props.filter.time,
            driver:this.props.username,
            destination:this.props.filter.destination,
            maxSeats:this.state.maxSeats,
            passengers:[],
            notes:this.state.notes,
            id
        })

        this.setState({
            maxSeats:1,
            notes:'',
            submitMsg: 'Submit was Successful'
        })
    }

    render(){
        return(
            <div>
                <form id='offer_form' onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="small-4 small-centered columns">
                            <label>Open Seats</label>
                            <select name='maxSeats' value={this.state.maxSeats} onChange={this.handleChange}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-6 small-centered columns">
                            <textarea name='notes' value={this.state.notes} onChange={this.handleChange} placeholder='Add notes here...'></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-4 small-centered columns">
                            <button className="expand">Submit</button>
                            {
                                (this.state.submitMsg) ? 
                                    <div data-notification="" className="notification-box success">
                                        {this.state.submitMsg}
                                        <a onClick={this.closeSubmit} className="close">&#xD7;</a>
                                    </div> : null
                            }
                        </div>
                    </div>
                    <hr />
                </form>
            </div>
        );
    }
}
export default OfferRide;