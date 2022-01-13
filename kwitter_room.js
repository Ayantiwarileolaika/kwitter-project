
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA9puCOgTmowPLPJUmgc9cPxeH3YX1zaHo",
     authDomain: "kwitter-bd2ab.firebaseapp.com",
     databaseURL:"https://kwitter-bd2ab-default-rtdb.firebaseio.com/",
     projectId: "kwitter-bd2ab",
      storageBucket: "kwitter-bd2ab.appspot.com",
      messagingSenderId: "648493217141",
      appId: "1:648493217141:web:398f2c40b267823e2b4f3c"
    };
    
// Initialize Firebase
var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
