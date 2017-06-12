//helper functions for firebase conneciton
import { ref } from '../config/constants'

const dbHelper = {
    //updates data for a given month-- returns a promise!!!
    setMonth : (year, month, data)=>{
        const updateData = {}
        updateData[`${year}/${month}`] = data
        return ref.update(updateData)
    },
    //returns the data object for a given year and month, returns a promise!!!!
    getMonth : (year, month)=>{
        return ref.child(`${year}/${month}`).once('value')
    }

}

module.exports = dbHelper;




