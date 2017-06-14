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
    }
}

module.exports = dbHelper;




