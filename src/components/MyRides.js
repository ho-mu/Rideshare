import React, {Component} from 'react';

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
        <div className="row">
            <div class="small-12 columns sg-content">
                <br/>
                <h3>My driving rides</h3>
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
                <h3>My passenger rides</h3>
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
        </div>
    )
}

export default MyRides;