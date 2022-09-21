import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyDXNDD4y5IWU-BKaeG_uOdSzo73LHr7dHw",
    authDomain: "snapchat-64a98.firebaseapp.com",
    projectId: "snapchat-64a98",
    storageBucket: "snapchat-64a98.appspot.com",
    messagingSenderId: "153381602499",
    appId: "1:153381602499:web:00a076be70e366ab3b8e76",
    measurementId: "G-VPPY4LJZ6B"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
export const db = getFirestore(app);
