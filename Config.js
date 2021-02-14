import firebase from 'firebase';
require("@firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyDnTjxUkTGVP1GBVBJM8Y5Zg7n35SlgLQQ",
  authDomain: "newsletter-7bd49.firebaseapp.com",
  databaseURL: "https://newsletter-7bd49.firebaseio.com",
  projectId: "newsletter-7bd49",
  storageBucket: "newsletter-7bd49.appspot.com",
  messagingSenderId: "1081915179704",
  appId: "1:1081915179704:web:df5796bfe2827d47a02a4d"
};
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();