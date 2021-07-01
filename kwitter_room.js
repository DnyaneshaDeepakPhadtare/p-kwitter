
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  var firebaseConfig = {
    apiKey: "AIzaSyBx9KqP2_S71iOo5NJ-6Ps19TZx59Zsqw4",
    authDomain: "kwitter-f8e5e.firebaseapp.com",
    databaseURL: "https://kwitter-f8e5e-default-rtdb.firebaseio.com",
    projectId: "kwitter-f8e5e",
    storageBucket: "kwitter-f8e5e.appspot.com",
    messagingSenderId: "12373918933",
    appId: "1:12373918933:web:84e502b86ceaa8587fce5c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }