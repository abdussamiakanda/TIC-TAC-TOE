// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCNEUQqer-9uwuc9s5duPQBl9CF9RUAwM0",
  authDomain: "my-blog-11.firebaseapp.com",
  databaseURL: "https://my-blog-11.firebaseio.com",
  projectId: "my-blog-11",
  storageBucket: "my-blog-11.appspot.com",
  messagingSenderId: "530249555585",
  appId: "1:530249555585:web:092567e8d49a5b68fab780",
  measurementId: "G-66TRHRV49T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();

function game() {
  let userId = localStorage.getItem('userId')
  document.getElementById("game_container").style.display = 'grid'
  document.getElementById("footer").style.display = 'none'


  updatePlayerAreas();
  messages();
  playerturns();
}

function messages(){
  let gameId = localStorage.getItem('gameId')
  database.ref('/'+gameId+'/main/').once("value").then((snapshot) => {
    var playr2 = snapshot.child("player2").val();
    console.log(playr2)

    if(playr2 !== "Robot"){
      document.getElementById("messages").style.display = 'block'
    }
  })
}

function updatePlayerAreas(){
  database.ref('/'+gameId+'/main/').once("value").then((snapshot) => {
    var player1 = snapshot.child("player1").val();
    var player2 = snapshot.child("player2").val();

    var x = document.getElementById("game_container")
    if (userId === snapshot.val().player1) {
      x.classList.add("container-2p-1")
      var html = "";
      html += userId;
      document.getElementById("player1").innerText += html;
      html = "";
      html += snapshot.val().player2;
      document.getElementById("player2").innerText += html;
    } else{
      x.classList.add("container-2p-2")
        x.classList.add("container-2p-1")
        var html = "";
        html += snapshot.val().player1;
        document.getElementById("player1").innerText += html;
        html ="";
        html += userId;
        document.getElementById("player2").innerText += html;
    }
  })
}

function playerturns(){
  database.ref('/'+gameId+'/main/').once("value").then((snapshot) => {
    var turn = snapshot.child("turn").val();
    var playerturn = snapshot.child("play1").val();

    if (turn === playerturn){
      document.getElementById("player1").classList.add("turn")
    } else {
      document.getElementById("player2").classList.add("turn")
    }
    for (let i = 1; i < 10; i++) {
      var c = 'c'+i;
      var cell = 'cell-'+i;
      var cellvalue = snapshot.child(c).val();

      document.getElementById(cell).innerText = cellvalue;
    }
  })
}











sendMessage = document.getElementById("sendMessage")
let gameId = localStorage.getItem('gameId')
let userId = localStorage.getItem('userId')

sendMessage.addEventListener("click", (e) =>{
  e.preventDefault();
  database.ref('/'+gameId+'/chats').push().set({
    sender: userId,
    message: message.value,
  });
});

// listen for incoming messages
database.ref('/'+gameId+'/chats').on('child_added', function (snapshot){
  var html = "";
  html += "<li>";
  html += snapshot.val().sender + ": " + snapshot.val().message;
  html += "</li>";

  document.getElementById("msgs").innerHTML += html;
});
