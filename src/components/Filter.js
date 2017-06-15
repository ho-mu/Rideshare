import React, {Component} from 'react';
import {filterTrips} from './../helpers/apiHelper';
let dateFormat = require('dateformat');

const Filter = (props) => {

    const handleChange = (event) => {
        const { name,value } = event.target;
        props.updateTripFilter({
            ...props.filter,
            [name]:value
        })
    }

    return (
        <div>
            <div className="row">
                <div className="small-4 columns">
                    <label>Date</label>
                    <input type='date' value={props.filter.date} name='date' onChange={handleChange}/>
                </div>
                <div className="small-4 columns">
                    <label>Departure Time</label>
                    <select name='time' value={props.filter.time} onChange={handleChange}>
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
                    <label>Destination</label>
                    <select name='destination' value={props.filter.destination} onChange={handleChange}>
                        <option value='Downtown'>Downtown</option>
                        <option value='Franklin'>Franklin</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter;