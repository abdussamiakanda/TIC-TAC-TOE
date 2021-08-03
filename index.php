<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TIC-TAC-TOE</title>
    <link rel="icon" href ="./public/assets/images/icons/uno-logo.png" type = "image/icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap" rel="stylesheet">

    <!-- styles -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./public/assets/css/style.css">
</head>
<body>

<div class="header">
  <h1 class="head">TIC-TAC-TOE</h1>
  <div id="user">
    <div id="user_name"></div>
    <div class="">
    </div>
  </div>
</div>


<div class="game-login" id="game_login">
    <div class="create-option" id="create_option">
        <div class="inactive">
            Create Game
        </div>
        <button class="join-button" id="join_menu_button" >Join Game</button>
    </div>
    <div class="join-option" id="join_option">
        <button class="join-button" id="create_menu_button">Create Game</button>
        <div class="inactive">
            Join Game
        </div>
    </div>
    <div class="join-game-form" id="join_game_form">
        <input type="text" class="game-input" id="username" maxlength="10" placeholder="Enter your nickname" autocomplete="off">
        <input type="text" class="game-input" id="game_id" style="display:none;" maxlength="6" placeholder="Enter a game id" autocomplete="off">
        <button type="button" id="join_button" class="join-button">Create Game</button>
    </div>
</div>

<!-- Game Container -->
<div class="game-container" id="game_container">
  <div id='player1' class='player1-area'></div>
  <div id='player2' class='player2-area'></div>

  <div class="mid">
    <div id="cell-1" class="cell-1">
    </div>
    <div id="cell-2" class="cell-2">
    </div>
    <div id="cell-3" class="cell-3">
    </div>
    <div id="cell-4" class="cell-4">
    </div>
    <div id="cell-5" class="cell-5">
    </div>
    <div id="cell-6" class="cell-6">
    </div>
    <div id="cell-7" class="cell-7">
    </div>
    <div id="cell-8" class="cell-8">
    </div>
    <div id="cell-9" class="cell-9">
    </div>
  </div>
</div>

<div class="alerts" id="alerts">
</div>














<div class="messages" id="messages">
  <ul class="list-ul" id="msgs"></ul>
  <form style="text-align: center;">
    <input type="text" class="input-message" id="message" placeholder="Enter message" autocomplete="off">
    <button type="button" id="sendMessage" class="send-message">Send</button>
  </form>
</div>






<!-- Footer -->
<div class="footer" id="footer">
  <div class="rules">
  </div>
  <div class="devs">
    Developers:
    <a target="_blank" href="https://github.com/abdussamiakanda"><div class="dev-link">Sami<span class="tips">Front-end</span></div></a>
    <a target="_blank" href="https://github.com/Mohammad1745"><div class="dev-link">Ali<span class="tips">Back-end</span></div></a>
  </div>
</div>



<!-- scripts -->
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-database.js"></script>
<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-analytics.js"></script>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="./public/assets/js/script.js"></script>
<script src="./public/assets/js/game.js"></script>
</body>
</html>
