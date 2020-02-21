import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCM8wYDwxTJ3zS8h2en_GcXZmgX7SVtJUs",
    authDomain: "react-my-burger-c85e1.firebaseapp.com",
    databaseURL: "https://react-my-burger-c85e1.firebaseio.com",
    projectId: "react-my-burger-c85e1",
    storageBucket: "react-my-burger-c85e1.appspot.com",
    messagingSenderId: "536530677844",
    appId: "1:536530677844:web:93762ac256b01ea10dfdc1",
    measurementId: "G-SYHJJZVTYL"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}
