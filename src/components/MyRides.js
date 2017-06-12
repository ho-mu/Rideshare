import React, {Component} from 'react';

const MyRides = (props) => {

    let rideList;

    const rides = [
        {
            date:'6/12/2017',
            direction:'to Franklin',
            departure: '12:00 pm',
            driver: 'Jason',
            openSeats: 5,
            notes: 'non-smoking'
        },
        {
            date:'6/14/2017',
            direction:'to Franklin',
            departure: '2:00 pm',
            driver: 'Holly',
            openSeats: 5,
            notes: 'non-smoking'
        },
        {
            date:'6/12/2017',
            direction:'to Downtown',
            departure: '10:00 am',
            driver: 'Matt',
            openSeats: 1,
            notes: 'non-smoking because that is gross and smelly'
        }
    ]

    const displayRides = () => {
        console.log('displaying rides');
        rideList = rides.map((ride,index) => {
            return (
                <tr>
                    <td>{ride.date}</td>
                    <td>{ride.direction}</td>
                    <td>{ride.departure}</td>
                    <td>{ride.driver}</td>
                    <td>{ride.openSeats}</td>
                    <td>{ride.notes}</td>
                </tr>
            )
        })
    }

    displayRides();

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Direction</th>
                        <th>Departure Time</th>
                        <th>Driver</th>
                        <th>Open Seats</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                {rideList}
            </table>
        </div>
    )
}

export default MyRides;