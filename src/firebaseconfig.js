import firebase from 'firebase';
import 'firebase/firestore';

let config = {
    apiKey: "AIzaSyCJtD764s3D86mIsYLnKNrHhXUgkK8ODmA",
    authDomain: "vuestore-a45a5.firebaseapp.com",
    databaseURL: "https://vuestore-a45a5.firebaseio.com",
    projectId: "vuestore-a45a5",
    storageBucket: "vuestore-a45a5.appspot.com",
    messagingSenderId: "359525527171"
};
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();