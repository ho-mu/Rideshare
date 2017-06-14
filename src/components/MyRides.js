import React, {Component} from 'react';
const database = require('./../helpers/firebase.js');

const MyRides = (props) => {

    const getDriverRides = () => {
        let filteredRides = props.trips.filter((ride,index) => {
            return (ride.driver === props.username)
        })

        return getTableRows(filteredRides);
    }

    const getPassengerRides = () => {
        let filteredRides = props.trips.filter((ride,index) => {
            for(let i=0; i<ride.passengers.length; i++){
                if(props.username === ride.passengers[i]) return true;
            }
            return false;
        })

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
                    <td>{getPassengerTags(ride.passengers, ride.id)}</td>
                    <td>{ride.notes}</td>
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
                return <div key={index}>{passenger}<button className='icon icon-close' name={tripID} id={passenger}  onClick={removePassenger} ></button></div> 
            }
            return <div key={index}>{passenger}<button className='icon'></button></div>
        })
    }

    let driverRides = getDriverRides();
    let passengerRides = getPassengerRides();

    return (
        <div className="row">
            <div className="small-12 columns sg-content">
                <br/>
                <h4>My driving rides</h4>
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
                <h4>My passenger rides</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Destination</th>
                            <th>Departure Time</th>
                            <th>Driver</th>
                            <th>Max Seats</th>
                            <th>Passengers</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passengerRides}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyRides;