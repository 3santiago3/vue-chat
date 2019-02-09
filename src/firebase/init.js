import firebase from "firebase/app";
// eslint-disable-next-line
import firestore from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBER-bWg2NuegUcoiei_jFE2tRTTMGRY9U",
  authDomain: "vue-chat-66a4a.firebaseapp.com",
  databaseURL: "https://vue-chat-66a4a.firebaseio.com",
  projectId: "vue-chat-66a4a",
  storageBucket: "vue-chat-66a4a.appspot.com",
  messagingSenderId: "132180765225"
};
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
