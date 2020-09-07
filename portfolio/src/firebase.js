import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: process.env.Firebase_apiKey,
    authDomain: process.env.Firebase_authDomain,
    databaseURL: process.env.Firebase_databaseURL,
    projectId: process.env.Firebase_projectId,
    storageBucket: process.env.Firebase_storageBucket,
    messagingSenderId: process.env.Firebase_messagingSenderId,
    appId: process.env.Firebase_appId,
    measurementId: process.env.Firebase_measurementId
})

export default app;
