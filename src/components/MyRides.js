import React, {Component} from 'react';
const database = require('./../helpers/firebase.js');
import {filterTrips} from './../helpers/apiHelper';
const removeImg = require('./../images/remove_img.png');
let dateFormat = require('dateformat');

const MyRides = (props) => {

    const getTableRows = (trips) => {
        return trips.map((trip,index) => {
            return (
                <tr key={index}>
                    <td>{trip.date}</td>
                    <td>{trip.time}</td>
                    <td>{trip.destination}</td>
                    <td>{trip.driver}</td>
                    <td>{trip.maxSeats}</td>
                    <td>{getPassengerTags(trip.passengers, trip.id)}</td>
                    <td>{trip.notes}</td>
                </tr>
            )
        })
    }

    const removePassenger = (event)=> {
        let tripID = event.target.name
        props.removePassenger(event.target.id, tripID)
        database.updateTrip(props.trips.find((trip)=>trip.id==tripID))
    }
 
    const getPassengerTags = (passengers, tripID) =>{
        return passengers.map((passenger, index) => {
            if(passenger === props.username){
                // return <div key={index}>{passenger}<button className='icon icon-close' name={tripID} id={passenger}  onClick={removePassenger} ></button></div> 
                return <div key={index}>{passenger}<img src={removeImg} className='removeImg myRides' alt='remove_img' name={tripID} id={passenger}  onClick={removePassenger} /></div> 
            }
            return <div key={index}>{passenger}</div>
        })
    }

    let myRides = getTableRows(
        filterTrips(
            props.trips, 
            {
                date:props.filter.date,
                username:props.username,
                matchTo:'passenger'
            }
        )
    );
    
    let formattedDate = dateFormat(new Date(props.filter.date + 'T12:00:00'), "m/d/yyyy") 

    return (
        <div className="row">
            <div className="small-12 columns sg-content">
                <br/>
                <h3>Your rides for {formattedDate} and later</h3>
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
                        {myRides}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyRides;