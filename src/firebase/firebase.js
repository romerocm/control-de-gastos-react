import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCgdYkGKbFynsQVYKPLt75AVI_5aY75hQ4",
    authDomain: "control-gastos-react.firebaseapp.com",
    databaseURL: "https://control-gastos-react.firebaseio.com",
    projectId: "control-gastos-react",
    storageBucket: "control-gastos-react.appspot.com",
    messagingSenderId: "350012804628",
    appId: "1:350012804628:web:537081a01c3c1d43"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };


// database.ref().set({
//     name: 'Carlos Romero',
//     age: 27,
//     isSingle: true,
//     location: {
//         city: 'San Salvador',
//         country: 'El Salvador'
//     }
//   });

//   database.ref('age').set(27);
//   database.ref('location/city').set('New York');

//   getConsoleOutput.log('I made a request to change the data.');