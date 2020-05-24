import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDGM1EuvjXuiIT_kNQTPKLUxv6nALPyXlA",
  authDomain: "newcart-72edc.firebaseapp.com",
  databaseURL: "https://newcart-72edc.firebaseio.com",
  projectId: "newcart-72edc",
  storageBucket: "newcart-72edc.appspot.com",
  messagingSenderId: "510317401897",
  appId: "1:510317401897:web:adfb66fd6288cde4be0938"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

