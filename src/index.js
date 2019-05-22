import React from 'react';
import ReactDOM from 'react-dom';
import {
	HashRouter
} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyAAEdmaSO46PAOxsxE14b3DhwuokLzgieE",
	authDomain: "blood-pact-674be.firebaseapp.com",
	databaseURL: "https://blood-pact-674be.firebaseio.com",
	projectId: "blood-pact-674be",
	storageBucket: "blood-pact-674be.appspot.com",
	messagingSenderId: "113963888427"
};
firebase.initializeApp(config);

ReactDOM.render( <
	HashRouter basename = {
		process.env.PUBLIC_URL
	} >
	<
	App / >
	<
	/HashRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();