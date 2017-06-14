import React, {Component} from 'react';
import {filterTrips} from './../helpers/apiHelper';

const MyDrives = (props) => {

    const getDriverRides = () => {
        let filteredRides = filterTrips(
            props.trips, 
            {
                username:props.username,
                matchTo:'driver'
            }
        )

        return getTableRows(filteredRides);
    }

    const getTableRows = (rides) => {
        return rides.map((ride,index) => {
            return (
                <tr key={index}>
                    <td>{ride.date}</td>
                    <td>{ride.time}</td>
                    <td>{ride.destination}</td>
                    <td>{ride.driver}</td>
                    <td>{ride.maxSeats}</td>
                    <td>{getPassengerTags(ride.passengers)}</td>
                    <td>{ride.notes}</td>
                </tr>
            )
        })
    }

    const getPassengerTags = (passengers) =>{
        return passengers.map((passenger) => {
            return <p>{passenger}</p>
        })
    }

    let driverRides = getDriverRides();

    return (
        <div className="row">
            <div className="small-12 columns sg-content">
                <br/>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Departure Time</th>
                            <th>Destination</th>
                            <th>Driver</th>
                            <th>Max Seats</th>
                            <th>Passengers</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {driverRides}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyDrives;