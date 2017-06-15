import React from 'react';
const database = require('./../helpers/firebase.js');
import {filterTrips} from './../helpers/apiHelper';

const FindRide = (props) => {

    const getTripComponents = (filteredTrips) => {
        return filteredTrips.map((trip,index) => {
            let openSeats = trip.maxSeats - trip.passengers.length;
            let disabledStatus = 
                (openSeats === 0? true:false) ||
                (trip.driver === props.username) ||
                (trip.passengers.indexOf(props.username) >= 0)
            return (
                <tr key={index}>
                    <td>{trip.date}</td>
                    <td>{trip.time}</td>
                    <td>{trip.destination}</td>
                    <td>{trip.driver}</td>
                    <td>{openSeats}</td>
                    <td>{getPassengerTags(trip.passengers)}</td>
                    <td>{trip.notes}</td>
                    <td><button name={trip.id} disabled={disabledStatus} onClick={handleBooking}>Book Ride</button></td>
                </tr>
            )
        })
    }

    const getPassengerTags = (passengers) =>{
        return passengers.map((passenger, index) => {
            return <p key={index}>{passenger}</p>
        })
    }

    const handleBooking = (event) => {
        props.addUserToTrip(props.username, event.target.name)
        database.updateTrip(props.trips.find((trip)=>trip.id==event.target.name))
    }

    let tripComponents = getTripComponents(
        filterTrips(
            props.trips,
            {
                date:props.filter.date,
                time:props.filter.time,
                destination:props.filter.destination
            }
        )
    )

    return (
        <div>  
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

export default FindRide;