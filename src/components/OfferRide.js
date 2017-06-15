const database = require('./../helpers/firebase.js');
let dateFormat = require('dateformat');
import React, { Component } from 'react';



class OfferRide extends Component {

    state = {
        maxSeats:1,
        notes:'',
        submitMsg:null,
        prevDateMsg: null
    }

    closeSubmit = (event) => {
        this.setState({
            submitMsg:null,
            prevDateMsg: null
        })
    }

    handleChange = (event) => {
        const { name,value } = event.target;
        this.setState({
            [name]:value,
            submitMsg:null,
            prevDateMsg: null
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        let today=dateFormat(new Date(), "yyyy-mm-dd");
        let idList = this.props.trips.map((trip) => {
            return Number(trip.id);
        })
        if( this.props.filter.date < today){
            const { name, value } = event.target
            this.setState({
                [name]:value,
                submitMsg:null,
                prevDateMsg: true
            })
        }else{
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
                submitMsg: 'Submit was Successful',
                prevDateMsg: null
            })
        }
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
                        <div className="small-4 large-2 small-centered columns">
                            <button className="expand">Submit</button>
                            {
                                (this.state.prevDateMsg) ?
                                    <div data-notification="" className="notification-box alert">
                                        Please select today or a future date.
                                        <a onClick={this.closeSubmit} className="close">&#xD7;</a>
                                    </div> : null
                            }
                        </div>
                    </div>

                    {
                        (this.state.submitMsg) ?
                    <div className="row">
                        <div className="small-6 medium-4 large-3 small-centered columns"> 
                            <div data-notification="" className="notification-box success">
                                {this.state.submitMsg}
                                <a onClick={this.closeSubmit} className="close">&#xD7;</a>
                            </div>
                        </div>
                    </div> : null
                    }

                    <hr />
                </form>
            </div>
        );
    }
}
export default OfferRide;