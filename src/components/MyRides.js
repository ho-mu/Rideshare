import React, {Component} from 'react';

const MyRides = (props) => {

    console.log(props);

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
                    <td>{ride.destination}</td>
                    <td>{ride.time}</td>
                    <td>{ride.driver}</td>
                    <td>{ride.maxSeats}</td>
                    <td>{ride.notes}</td>
                </tr>
            )
        })
    }

    let driverRides = getDriverRides();
    let passengerRides = getPassengerRides();

    

    return (
        <div>
            <label className='label small secondary'>My driving rides</label>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Driver</th>
                        <th>Max Seats</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {driverRides}
                </tbody>
            </table>
            <label className='label small secondary'>My passenger rides</label>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Driver</th>
                        <th>Max Seats</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {passengerRides}
                </tbody>
            </table>
        </div>
    )
}

export default MyRides;