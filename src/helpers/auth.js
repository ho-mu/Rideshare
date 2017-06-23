import { ref, firebaseAuth } from '../config/constants'

export function auth (email, pw, username) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then((oldUser)=>{
      let user = {
        ...oldUser,
        displayName: username
      }

      oldUser.updateProfile({
        displayName: username
      })

      saveUser(user)
      return username
    })
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
      displayName: user.displayName
    })
    .then(() => user)
}
