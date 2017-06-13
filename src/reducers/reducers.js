const database = require('./../helpers/firebase.js');

const reducer = (prevState,action) => {

    if(prevState === undefined){
         return {trips: [],
         username: ''}

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

    switch(action.type){
        case 'ADD_TRIP':
            return {
                ...prevState,
                trips:addNewTrip(action.details)
            };
            break;
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
            break;
        default:
            return prevState;
    }
}

export default reducer;