//helper functions for firebase conneciton
import { ref } from '../config/constants'

const dbHelper = {

    addNewTrip : (trip)=>{
        const updateData = {}
        updateData[`/trips/${trip.id}`] = trip
        return ref.update(updateData)        
    },
    updateTrip : (trip)=>{
        const updateData = {}
        updateData[`/trips/${trip.id}`] = trip
        return ref.update(updateData)        
    },
    getAllTrips : ()=>{
        return ref.child(`/trips`).once('value')
    },
    subscribeToTripChanges : (cb)=>{
        return ref.child(`/trips`).on('value', cb)        
    },
    removeTrip : (id) =>{
        return ref.child(`/trips/${id}`).remove()
    } 

}

module.exports = dbHelper;




