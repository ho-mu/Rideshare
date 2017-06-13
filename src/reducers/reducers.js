const database = require('./../helpers/firebase.js');

const reducer = (prevState,action) => {

    if(prevState === undefined){
        return{
            trips:[
                {
                    date:'6/13/2017',
                    driver:'Jason Boser',
                    destination:'Franklin',
                    time:'3:30pm',
                    maxSeats:5,
                    passengers:['Holly','Matt','Scott'],
                    notes:''
                },
                {
                    date:'6/12/2017',
                    driver:'Holly',
                    destination:'Downtown',
                    time:'5:00pm',
                    maxSeats:1,
                    passengers:['Jason Boser'],
                    notes:'handle bar rider'
                }
            ],
            username:''
        }

        // database.getMonth(2010,2)
        //     .then((res) => {
        //         prevState = res.val();
        //         console.log(prevState);
        //     })
    }

    console.log(prevState);

    const addNewTrip = (details) => {
        let results = [...prevState.trips];
        results.push(details);
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
        default:
            return prevState;
    }
}

export default reducer;