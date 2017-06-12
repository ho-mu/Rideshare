//helper functions for firebase conneciton
const firebase = require('firebase');
const config = {
                apiKey: "AIzaSyBbyH3EB5jJqOLo8vyjeysHViU3q1Y-FrI",
                authDomain: "rideshare-b7e9e.firebaseapp.com",
                databaseURL: "https://rideshare-b7e9e.firebaseio.com",
                projectId: "rideshare-b7e9e",
                storageBucket: "rideshare-b7e9e.appspot.com",
                messagingSenderId: "80398535460"
               }
var firebaseDB = firebase.initializeApp(config)

const dbHelper = {
    //updates data for a given month-- returns a promise!!!
    setMonth : (year, month, data)=>{
        const updateData = {}
        updateData[`${year}/${month}`] = data
        return firebaseDB.database().ref().update(updateData)
    },
    //returns the data object for a given year and month, returns a promise!!!!
    getMonth : (year, month)=>{
        return firebase.database().ref(`${year}/${month}`).once('value')
    }

}

module.exports = dbHelper;




