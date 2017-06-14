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
        console.log(`trips: `, this.props.trips)
        console.log(`date: `, this.state.date)
        let tripComponents = this.getTripComponents();

        return (
            <div>
                <label>Date:</label>
                <input type='date' value={this.state.date}onChange={this.handleDateSelect} />
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
        )
    }
}

export default FindRide;