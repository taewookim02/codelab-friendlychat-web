/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAXBdtnLexaC9iLQINKuH9pi5BMiI3VZ8o",
  authDomain: "friendlychat-a762d.firebaseapp.com",
  projectId: "friendlychat-a762d",
  storageBucket: "friendlychat-a762d.appspot.com",
  messagingSenderId: "1031867344413",
  appId: "1:1031867344413:web:5e40744a096205674248f4",
  measurementId: "G-E5733TGVQY",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
