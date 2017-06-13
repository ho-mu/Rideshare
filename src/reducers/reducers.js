const database = require('./../helpers/firebase.js');

const reducer = (prevState,action) => {

    if(prevState === undefined){
         return {trips: [],
         username: ''}

    }

    const addNewTrip = (details) => {
        let tripCount = prevState.trips.length;
        let results = [...prevState.trips];
        results.push(
            {
                ...details,
                id:tripCount
            }
        );

        return results;
    }

    const updateTripPassengers = (username, id) => {
        let updatedTrips = [...prevState.trips];
        let newPassengers = [...updatedTrips[id].passengers]
        newPassengers.push(username);
        updatedTrips[id].passengers = newPassengers;
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