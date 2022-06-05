import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4dSNNd08ipqQvTgCCJ17YFfQ71QCvPmw",
  authDomain: "pokemons-api-aa521.firebaseapp.com",
  projectId: "pokemons-api-aa521",
  storageBucket: "pokemons-api-aa521.appspot.com",
  messagingSenderId: "182087789911",
  appId: "1:182087789911:web:187e01856ff53d6efce212"
};

firebase.initializeApp(firebaseConfig);
export { firebase };