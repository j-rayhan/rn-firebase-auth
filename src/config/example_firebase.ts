import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'YOUR_FIREBASE_API_KEY_HERE',
  authDomain: 'YOUR_FIREBASE_AUTH_DOMAIN_HERE',
  databaseURL: 'YOUR_FIREBASE_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);
