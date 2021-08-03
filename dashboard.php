<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>UNO</title>
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

<div class="game-container">

  <div class="player1-area">
      Player 1
  </div>

  <div class="mid">
    <div class="cell-1">
      O
    </div>
    <div class="cell-2">
      X
    </div>
    <div class="cell-3">
      O
    </div>
    <div class="cell-4">
      O
    </div>
    <div class="cell-5">
      X
    </div>
    <div class="cell-6">
      X
    </div>
    <div class="cell-7">
      X
    </div>
    <div class="cell-8">
      O
    </div>
    <div class="cell-9">
      O
    </div>
  </div>

  <div class="player2-area">
      Player 2
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
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.3/socket.io.min.js"></script>-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="./public/assets/js/game.js"></script>
</body>
</html>
