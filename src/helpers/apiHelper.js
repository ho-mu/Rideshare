
const filterTrips = (trips,parameters) => {
    //{
        //date:
        //time:
        //destination:
        //username:
        //matchTo: 'driver' or 'passenger'
    //}
    let filteredTrips = trips.filter((trip,index) => {
        if(parameters.date !== undefined){
            if(trip.date < parameters.date) return false;
        }

        if(parameters.time !== undefined){
            if((new Date('1970/01/01 ' + trip.time)) < (new Date('1970/01/01 ' + parameters.time))) return false;
        }

        if(parameters.destination !== undefined){
            if(trip.destination !== parameters.destination) return false;
        }

        if(parameters.username !== undefined){
            if(parameters.matchTo === 'driver'){
                if(trip.driver !== parameters.username) return false;
            }else if(parameters.matchTo === 'passenger'){
                let found = false;
                for(let i=0; i<trip.passengers.length; i++){
                    if(trip.passengers[i] === parameters.username) found = true;
                }
                if(!found) return false;
            }
        }

        return true;
    })

    filteredTrips.sort((a,b) => {
        let aDate = new Date(a.date + ' ' + a.time);
        let bDate = new Date(b.date + ' ' + b.time);

        if(aDate < bDate){
            return -1;
        }else if(aDate > bDate){
            return 1;
        }else{
            return 0;
        }
    })

    return filteredTrips;
}

export {filterTrips}
