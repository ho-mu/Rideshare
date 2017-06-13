const database = require('./../helpers/firebase.js');

const reducer = (prevState,action) => {

    if(prevState === undefined){
         return {trips: [],
         username: ''}
    }

    console.log(prevState);

    const addNewTrip = (details) => {
        let results = [...prevState.trips];
        results.push(details);

        //details.id=2
        //SAVE THE TRIP TO FIREBASE
        //database.addNewTrip(details)

        return results;
    }

    switch(action.type){
        case 'ADD_TRIP':
            return {
                ...prevState,
                trips:addNewTrip(action.details)
            };
            break;
        case 'RESERVE_RIDE':
            return prevState;
            break;
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