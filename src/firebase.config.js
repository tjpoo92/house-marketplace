import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
	authDomain: "house-marketplace-app-aafab.firebaseapp.com",
	projectId: "house-marketplace-app-aafab",
	storageBucket: "house-marketplace-app-aafab.appspot.com",
	messagingSenderId: "100905038766",
	appId: "1:100905038766:web:f6f731e1b1c5d4346cce3f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
