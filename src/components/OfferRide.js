import React, { Component } from 'react';
const OfferRide = (props) => {
    return(
        <div className="columns small-centered small-12">
            <div className="row">
                <div className="small-4 columns">
                    <label>Date</label>
                    <input type='date' value />
                </div>
            </div>
            <form id='offer_form'>
                <hr />
                <div className="row">
                    <div className="small-12 columns">
                        <label>User Name: Matt Vobejda</label>
                    </div>
                </div>
                <div className="row">
                    <div className="small-4 columns">
                        <label>Departing Downtown</label>
                        <select>
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
                        <label>Departing Franklin</label>
                        <select>
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
                        <select>
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
                        <textarea placeholder='Add notes here...'></textarea>
                    </div>
                </div>
                <button>Submit</button>
                <hr />
            </form>
        </div>
    );
}
export default OfferRide;