import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



//add helper functions for firebase
const database = require('./firebase/index.js');

//load dummy rides data for month of JUNE, 2017
const {rides} = require('./dummydata.json'); 

//Save to Feb, 2010 
database.setMonth(2010,2,rides)
.then((res)=>{console.log("saved some data")})
.catch((e)=>{console.log(e)})

//get the data from Feb, 2010
database.getMonth(2015,2)
.then((response)=>{
    console.log("Got some data")
    console.log(response.val())
})
.catch((e)=>{console.log(e)})




ReactDOM.render(<App />, document.getElementById('root'));


