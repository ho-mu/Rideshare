

const setUser = (username) => {
    return {
        type:'SET_USER',
        username
    };
}

const addTrip = (details) => {
    return {
        type:'ADD_TRIP',
        details
    };
}

const loadAllTrips = (trips) =>{
    return {
        type: 'LOAD_ALL_TRIPS',
        trips
    }
}

const addUserToTrip = (username, id) => {
    return {
        type:'ADD_USER_TO_TRIP',
        username,
        id
    }
}

export {setUser,addTrip,addUserToTrip,loadAllTrips}
