//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDCNb78ldWLie-2sRR0V7z0y3uJtt66BJU",
      authDomain: "lets-chat-web-app-a640b.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-a640b-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-a640b",
      storageBucket: "lets-chat-web-app-a640b.appspot.com",
      messagingSenderId: "461724403740",
      appId: "1:461724403740:web:8a4f27ab288187600e37d9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";

}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
