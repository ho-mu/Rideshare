import React, { Component } from 'react'


// //add helper functions for firebase
const database = require('../../helpers/firebase.js');


// //load dummy rides data for month of JUNE, 2017
// const {rides} = require('./dummydata.json'); 

// //Save to Feb, 2010 
// database.setMonth(2010,2,rides)
// .then((res)=>{console.log("saved some data")})
// .catch((e)=>{console.log(e)})


export default class Dashboard extends Component {

  state = {
    records: []
  }

  getData = () =>{
    let example = []
    //get the data from Feb, 2010
    database.getMonth(2010,2)
    .then((response)=>{
        this.setState({
          records: response.val()
        })
    })
    .catch((e)=>{console.log(e)})
  }


  render () {
    let example = []

    //display dates
     example = this.state.records.map((record)=>{
                 return (
                   <div>
                   <p>date: {record.date}</p>
                   <p>target: {record.target}</p>
                   <p>time: {record.time}</p>
                   </div>)
               })
    
    return (
      <div>
        Rides Stuff
        {example}
        <hr/>
        <button onClick={this.getData}>Load Data</button>
      </div>
    )
  }
}

