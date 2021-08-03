let joinGameOptions = {
    createGame: 1,
    joinGame: 2
}
let joinGameOption = joinGameOptions.createGame

document.addEventListener("DOMContentLoaded", async () => {
    joinGameMenuHandler()
    joinGameButtonHandler()
    if(localStorage.getItem('gameId')) startGamePopUp()
    if(localStorage.getItem('gameStarted')){
      document.getElementById("game_login").classList.add("hide")
      game()
    }
})

function joinGameMenuHandler() {
    const joinMenuButton = document.querySelector('#join_menu_button')
    const createMenuButton = document.querySelector('#create_menu_button')

    joinMenuButton.addEventListener('click', () => {
        joinGameOption = joinGameOptions.joinGame
        document.getElementById('game_id').style.display = "flex";
        document.getElementById("create_option").style.display = "none";
        document.getElementById("join_option").style.display = "flex";
        document.getElementById('join_button').innerHTML = "Join Game"
    })
    createMenuButton.addEventListener('click', () => {
        joinGameOption = joinGameOptions.createGame
        document.getElementById('game_id').style.display = "none";
        document.getElementById("create_option").style.display = "flex";
        document.getElementById("join_option").style.display = "none";
        document.getElementById('join_button').innerHTML = "Create Game"
    })
}

function joinGameButtonHandler() {
    const joinButton = document.getElementById('join_button')

    joinButton.addEventListener('click', async () => {
        const username = document.getElementById('username')
        const gameId = document.getElementById('game_id')

        if(localStorage.getItem('gameId')){
            await startGamePopUp()
        } else {
            if (joinGameOption===joinGameOptions.joinGame)
                joinGame({username, gameId})
            else
                createGame({username})
        }
    })
}

function joinGame ({username, gameId}) {
  database.ref('/'+gameId.value).once("value").then(function (snapshot) {
    var a = snapshot.child("main").exists()
    if (a){
      database.ref('/'+gameId.value+'/main').once("value").then((snapshot) => {
        var gamestatus = snapshot.child("gameStarted").val();

        if (!gamestatus){
          database.ref('/'+gameId.value+"/main").update({
            player2: username.value,
            gameStarted: true
          });
          localStorage.setItem('gameId', gameId.value)
          localStorage.setItem('userId', username.value)
          localStorage.setItem('play', "O")
          localStorage.setItem('gameStarted', true)

          startGame(gameId)
        } else {
          popup_notice("Game already started!")
        }
      });
    } else {
      popup_notice("Game does not exist!")
    }
  });
}

function createGame ({username}) {
    const gameId = Math.floor(Math.random() * 10000)
    localStorage.setItem('gameId', gameId)
    localStorage.setItem('userId', username.value)
    localStorage.setItem('play', "X")
    localStorage.setItem('gameStarted', false)

    database.ref('/'+gameId+"/main").set({
      player1: username.value,
      player2: "Robot",
      play1: "X",
      play2: "O",
      turn: "X",
      c1: "",
      c2: "",
      c3: "",
      c4: "",
      c5: "",
      c6: "",
      c7: "",
      c8: "",
      c9: "",
      gameStarted: false
    });
    startGamePopUp()
}

function popup_notice(text) {
  var html = "";
  html = text;

  var x = document.getElementById("alerts");
  x.classList.add("show");
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  document.getElementById("alerts").innerHTML = html;
}

async function startGamePopUp() {
    let gameId = localStorage.getItem('gameId')
    let username = localStorage.getItem('userId')
    const startGamePopUp = document.getElementById('game_login')
    startGamePopUp.innerHTML = ''

    startGamePopUp.insertAdjacentHTML('beforeend', `
        <div id="popup_game_id" class="popup-game-id"> Game ID: ${gameId}</div>
        <hr>
        <div id="popup_game_id" class="popup-game-id">
        Share the "Game ID" with your friend or click "Start Game" to play with robot.
        </div>
        <button type="button" id="start_game_button" class="start-game-button">Start Game</button>
    `)
    startGamePopUp.style.padding = "10px"
    document.getElementById('popup_game_id').style.color = 'black'
    handleStartGameButton()
}

function handleStartGameButton() {
    const startButton = document.getElementById('start_game_button')

    startButton.addEventListener('click', async () => {
        let gameId = localStorage.getItem('gameId')
        startGame(gameId)
    })
}

function startGame(gameId) {
  database.ref('/'+gameId+"/main").update({
    gameStarted: true
  });
  localStorage.setItem('gameStarted', true)
  document.getElementById("game_login").classList.add("hide")
  document.getElementById("footer").style.display = 'none'
}
