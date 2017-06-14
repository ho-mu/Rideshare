import React, {Component} from 'react';
import {filterTrips} from './../helpers/apiHelper';
const database = require('./../helpers/firebase.js');
const removeImg = require('./../images/remove_img.png');

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

    const removeTrip = (event) => {
        console.log(`in remove trip`, event.target.name)
        //remove trip from state
        props.removeTrip(event.target.name)
        //remove trip from DB
        database.removeTrip(event.target.name)
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
                    {/*<td><button className='icon icon-close' name={ride.id}  onClick={removeTrip} ></button></td>*/}
                    <td><img src={removeImg} className='removeImg myDrives' name={ride.id}  onClick={removeTrip} /></td>
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
                            <th></th>
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