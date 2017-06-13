import React, {Component} from 'react';
const database = require('./../helpers/firebase.js');

class FindRide extends Component {

    state = {
        date:'',
        tripList:[]
    }

    filterTrips = (event) => {
        let dateFilter = event.target.value;

        let filteredTrips = this.props.trips.filter((trip,index) => {
            console.log(trip.date, dateFilter);
            if(trip.date === dateFilter) return true;
            else return false;
        })

        this.setState({
            date:dateFilter,
            tripList:filteredTrips
        });
    }

    getTripComponents = (filteredTrips) => {
        return filteredTrips.map((trip,index) => {
            let openSeats = trip.maxSeats - trip.passengers.length;
            let disabledStatus = 
                (openSeats === 0? true:false) ||
                (trip.driver === this.props.username) ||
                (trip.passengers.indexOf(this.props.username) >= 0)
            return (
                <tr key={index}>
                    <td>{trip.date}</td>
                    <td>{trip.destination}</td>
                    <td>{trip.time}</td>
                    <td>{trip.driver}</td>
                    <td>{openSeats}</td>
                    <td>{trip.notes}</td>
                    <td><button name={trip.id} disabled={disabledStatus} onClick={this.handleBooking}>Book Ride</button></td>
                </tr>
            )
        })
    }

    handleBooking = (event) => {
        this.props.addUserToTrip(this.props.username, event.target.name)
        database.updateTrip(this.props.trips.find((trip)=>trip.id==event.target.name))
    }

    render(){
        let tripComponents = this.getTripComponents(this.state.tripList);

        return (
            <div>
                <label>Date:</label>
                <input type='date' onChange={this.filterTrips} />
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Destination</th>
                            <th>Departure Time</th>
                            <th>Driver</th>
                            <th>Available Seats</th>
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