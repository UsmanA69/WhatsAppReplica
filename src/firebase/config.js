import Firebase from "firebase";

const firebaseConfig = {
  databaseURL: "https://whatsappclone-8aea3-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyB8eRqYCkLDhS9lepJx0653_2S5QoeQAN8",
  authDomain: "whatsappclone-8aea3.firebaseapp.com",
  projectId: "whatsappclone-8aea3",
  storageBucket: "whatsappclone-8aea3.appspot.com",
  messagingSenderId: "1007787787827",
  appId: "1:1007787787827:web:5403192a6531a3cbc10546"
};

export default Firebase.initializeApp(firebaseConfig);
