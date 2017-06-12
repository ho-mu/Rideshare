import firebase from 'firebase'

const config = {
                apiKey: "AIzaSyBbyH3EB5jJqOLo8vyjeysHViU3q1Y-FrI",
                authDomain: "rideshare-b7e9e.firebaseapp.com",
                databaseURL: "https://rideshare-b7e9e.firebaseio.com",
                projectId: "rideshare-b7e9e",
                storageBucket: "rideshare-b7e9e.appspot.com",
                messagingSenderId: "80398535460"
               }

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth