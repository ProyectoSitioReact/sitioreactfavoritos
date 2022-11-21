// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAVGgp3Mj_J2lPRAvfipB05CXSUQrKECTY',
    authDomain: 'fb-bdreactfavoritos.firebaseapp.com',
    projectId: 'fb-bdreactfavoritos',
    storageBucket: "fb-bdreactfavoritos.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
