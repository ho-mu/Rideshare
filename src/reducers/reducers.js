const database = require('./../helpers/firebase.js');

const reducer = (prevState,action) => {

    if(prevState === undefined){
        let trips = [
            {
                date:'2017-06-13',
                driver:'Jason Boser',
                destination:'Franklin',
                time:'3:30pm',
                maxSeats:5,
                passengers:['Holly Murphy','Matt','Scott'],
                notes:'',
                id:0
            },
            {
                date:'2017-06-13',
                driver:'Holly',
                destination:'Downtown',
                time:'5:00pm',
                maxSeats:1,
                passengers:['Jason Boser'],
                notes:'handle bar rider',
                id:1
            },
            {
                date:'2017-06-13',
                driver:'Holly',
                destination:'Downtown',
                time:'5:00pm',
                maxSeats:1,
                passengers:['Jason'],
                notes:'handle bar rider',
                id:2
            },
            {
                date:'2017-06-13',
                driver:'Holly',
                destination:'Downtown',
                time:'5:00pm',
                maxSeats:1,
                passengers:[],
                notes:'handle bar rider',
                id:3
            }
        ]

        return{
            trips,
            username:''
        }
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
        default:
            return prevState;
    }
}

export default reducer;