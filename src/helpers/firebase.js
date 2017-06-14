//helper functions for firebase conneciton
import { ref } from '../config/constants'

const dbHelper = {

    addNewTrip : (trip)=>{
        console.log("adding a trip to db",trip)
        const updateData = {}
        updateData[`/trips/${trip.id}`] = trip
        return ref.update(updateData)        
    },
    updateTrip : (trip)=>{
        console.log("adding a trip to db",trip)
        const updateData = {}
        updateData[`/trips/${trip.id}`] = trip
        return ref.update(updateData)        
    },
    getAllTrips : ()=>{
        return ref.child(`/trips`).once('value')
    },
    subscribeToTripChanges : (cb)=>{
        return ref.child(`/trips`).on('value', cb)        
    }
}

module.exports = dbHelper;




