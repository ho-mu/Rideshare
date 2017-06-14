import React, {Component} from 'react';
const database = require('./../helpers/firebase.js');
let dateFormat = require('dateformat');

class FindRide extends Component {

    state = {
        date:dateFormat(new Date(), "yyyy-mm-dd")
    }

    handleDateSelect = (event) => {
        let dateFilter = event.target.value;
        this.setState({
            date:dateFilter
        });
    }



    getTripComponents = () => {
        let filteredTrips = this.props.trips.filter((trip) => {
            return trip.date === this.state.date
        })

        return filteredTrips.map((trip,index) => {
            let openSeats = trip.maxSeats - trip.passengers.length;
            let disabledStatus = 
                (openSeats === 0? true:false) ||
                (trip.driver === this.props.username) ||
                (trip.passengers.indexOf(this.props.username) >= 0)
            return (
                <tr key={index}>
                    <td>{trip.date}</td>
                    <td>{trip.time}</td>
                    <td>{trip.destination}</td>
                    <td>{trip.driver}</td>
                    <td>{openSeats}</td>
                    <td>{this.getPassengerTags(trip.passengers)}</td>
                    <td>{trip.notes}</td>
                    <td><button name={trip.id} disabled={disabledStatus} onClick={this.handleBooking}>Book Ride</button></td>
                </tr>
            )
        })
    }

    getPassengerTags = (passengers) =>{
        return passengers.map((passenger) => {
            return <p>{passenger}</p>
        })
    }

    handleBooking = (event) => {
        this.props.addUserToTrip(this.props.username, event.target.name)
        database.updateTrip(this.props.trips.find((trip)=>trip.id==event.target.name))
    }

    render(){
        let tripComponents = this.getTripComponents();

        return (
            <div>
            <div className="row">
               <div className="small-12 columns sg-content">
                    <label>Date:</label>
                    <input className="small-9 medium-4 large-3 xlarge-2 column" value={this.state.date} type='date' onChange={this.handleDateSelect} />
                </div>
            </div>    
            <div className="row">
               <div className="small-12 columns sg-content">
                    <hr />
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Destination</th>
                                <th>Departure Time</th>
                                <th>Driver</th>
                                <th>Available Seats</th>
                                <th>Passengers</th>
                                <th>Notes</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tripComponents}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}

export default FindRide;