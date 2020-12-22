import firebase from 'firebase';
import Constants from 'expo-constants';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: "AIzaSyD4o9bQyLDjN41skwruAZdFMY3rmPm_VeY",
        authDomain: "capstone-app-5f090.firebaseapp.com",
        databaseURL: "https://capstone-app-5f090-default-rtdb.firebaseio.com",
        projectId: "capstone-app-5f090",
        storageBucket: "capstone-app-5f090.appspot.com",
        messagingSenderId: "643342555589",
        appId: "1:643342555589:web:c450ce69651da6208453ac"
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;




