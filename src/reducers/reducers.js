const database = require('./../helpers/firebase.js');
let dateFormat = require('dateformat');

const reducer = (prevState,action) => {

    if(prevState === undefined){
         return {
            trips: [],
            username: '',
            filter:{
                date:dateFormat(new Date(), "yyyy-mm-dd"),
                time:'6:00 AM',
                destination:'Downtown'
            }
        }

    }

    const addNewTrip = (details) => {
        let results = [...prevState.trips];
        results.push(
            {
                ...details
            }
        );

        return results;
    }

    const updateTripPassengers = (username, id) => {
        let updatedTrips = [...prevState.trips];
        
        let targetTrip = updatedTrips.find((trip)=>{
            return trip.id==id
        })
        console.log("target trip", targetTrip)
        let newPassengers = [...targetTrip.passengers]
        
        newPassengers.push(username);
        targetTrip.passengers = newPassengers;
        return updatedTrips;
    }

    const removePassenger = (passenger, id) => {
        let updatedTrips = [...prevState.trips]

        let targetTrip = updatedTrips.find((trip) => {
            return trip.id==id
        })

        let newPassengers = [...targetTrip.passengers]
        let index = newPassengers.indexOf(passenger)
        newPassengers.splice(index)

        targetTrip.passengers = newPassengers

        return updatedTrips
        
    }

    switch(action.type){
        case 'ADD_TRIP':
            return {
                ...prevState,
                trips:addNewTrip(action.details)
            };
        case 'ADD_USER_TO_TRIP':
            return {
                ...prevState,
                trips:updateTripPassengers(action.username, action.id)
            };
        case 'SET_USER':
            return {
                ...prevState,
                username:action.username
            };
        case 'LOAD_ALL_TRIPS':
            return {
                ...prevState,
                trips: action.trips
            }
        case 'REMOVE_PASSENGER':
            return {
                ...prevState,
                trips: removePassenger(action.passenger, action.id)
            }
            break;
        case 'UPDATE_TRIP_FILTER':
            return {
                ...prevState,
                filter: action.filter
            }
            break;
        default:
            return prevState;
    }
}

export default reducer;