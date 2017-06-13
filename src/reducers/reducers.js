const database = require('./../helpers/firebase.js');

const reducer = (prevState,action) => {

    if(prevState === undefined){
        database.getMonth(2010,2)
            .then((res) => {
                prevState = res.val();
                console.log(prevState);
            })
    }

    console.log(prevState);

    switch(action.type){
        case 'ADD_TRIP':
            return {
                ...prevState
            };
            break;
        case 'RESERVE_RIDE':
            return prevState;
            break;
        case 'SET_USER':
            return {
                ...prevState,
                user:action.username
            };
        default:
            return prevState;
    }
}

export default reducer;