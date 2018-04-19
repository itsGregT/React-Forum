import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYkUUw-zkCuxfYqIh5DR2CQH4dZ2IShsU",
   authDomain: "react-forum-351cb.firebaseapp.com",
   databaseURL: "https://react-forum-351cb.firebaseio.com"
});

export default firebaseApp;