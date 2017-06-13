import React, { Component } from 'react';

class OfferRide extends Component {

    state = {
        date:'',
        time:'',
        destination:'',
        maxSeats:0,
        notes:''
    }

    handleChange = (event) => {
        const { name,value } = event.target;
        this.setState({
            [name]:value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        this.props.addTrip({
            date:this.state.date,
            time:this.state.time,
            driver:this.props.username,
            destination:this.state.destination,
            maxSeats:this.state.maxSeats,
            passengers:[],
            notes:this.state.notes
        })
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="small-12 columns">
                        <label>Date</label>
                        <input type='date' name='date' onChange={this.handleChange}/>
                    </div>
                </div>
                <form id='offer_form' onSubmit={this.handleSubmit}>
                    <hr />
                    <div className="row">
                        <div className="small-12 columns">
                            <label>User Name: {this.props.username}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-4 columns">
                            <label>Destination</label>
                            <select name='destination' onChange={this.handleChange}>
                                <option value='downtown'>Downtown</option>
                                <option value='franklin'>Franklin</option>
                            </select>
                        </div>
                        <div className="small-4 columns">
                            <label>Departure Time</label>
                            <select name='time' onChange={this.handleChange}>
                                <option value='6:00 AM'>6:00 AM</option>
                                <option value='6:30 AM'>6:30 AM</option>
                                <option value='7:00 AM'>7:00 AM</option>
                                <option value='7:30 AM'>7:30 AM</option>
                                <option value='8:00 AM'>8:00 AM</option>
                                <option value='8:30 AM'>8:30 AM</option>
                                <option value='9:00 AM'>9:00 AM</option>
                                <option value='9:30 AM'>9:30 AM</option>
                                <option value='10:00 AM'>10:00 AM</option>
                                <option value='10:30 AM'>10:30 AM</option>
                                <option value='11:00 AM'>11:00 AM</option>
                                <option value='11:30 AM'>11:30 AM</option>
                                <option value='12:00 PM'>12:00 AM</option>
                                <option value='12:30 PM'>12:30 AM</option>
                                <option value='1:00 PM'>1:00 PM</option>
                                <option value='1:30 PM'>1:30 PM</option>
                                <option value='2:00 PM'>2:00 PM</option>
                                <option value='2:30 PM'>2:30 PM</option>
                                <option value='3:00 PM'>3:00 PM</option>
                                <option value='3:30 PM'>3:30 PM</option>
                                <option value='4:00 PM'>4:00 PM</option>
                                <option value='4:30 PM'>4:30 PM</option>
                                <option value='5:00 PM'>5:00 PM</option>
                                <option value='5:30 PM'>5:30 PM</option>
                                <option value='6:00 PM'>6:00 PM</option>
                            </select>
                        </div>
                        <div className="small-4 columns">
                            <label>Open Seats</label>
                            <select name='maxSeats' onChange={this.handleChange}>
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
                    </div>
                    <div className="row">
                        <div className="large-6 columns">
                            <textarea name='notes' onChange={this.handleChange} placeholder='Add notes here...'></textarea>
                        </div>
                    </div>
                    <button>Submit</button>
                    <hr />
                </form>
            </div>
        );
    }
}
export default OfferRide;