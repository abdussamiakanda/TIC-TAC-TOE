var cells = [0,1,2,3,4,5,6,7,8];
var values = ['0','1','2','3','4','5','6','7','8'];
var auth = true;
var level = null;

function levelBot(bot){
  level = bot;
  document.getElementById('popup').style.display='none';
  document.getElementById('bot').innerHTML = bot;
  if(bot === "Jarvis"){
    playBot()
  }
}

function play(cell){
  if(document.getElementById('cell-'+cell).innerHTML === '' && auth === true){
    document.getElementById('cell-'+cell).innerHTML = 'X';
    document.getElementById('cell-'+cell).classList.remove('cursor');
    deleteVal(cell);

    values[cell] = 'X';
    checkWinner("X")
    auth = false;
  }
}

function playBot(){
  document.getElementById('you').classList.remove('turn');
  document.getElementById('bot').classList.add('turn');
  var cell = botBrain();
  removeCursor()

  setTimeout(function(){
    if(document.getElementById('cell-'+cell).innerHTML === ''){
      document.getElementById('cell-'+cell).innerHTML = 'O';
      document.getElementById('cell-'+cell).classList.remove('cursor');
      deleteVal(cell);
      values[cell] = 'O';
      checkWinner('O')
    }
  }, 2000);
}

function playYou(){
  auth = true;
  document.getElementById('bot').classList.remove('turn');
  document.getElementById('you').classList.add('turn');
  addCursor();
}

function deleteVal(val){
  for( var i = 0; i < cells.length; i++){
    if(cells[i] === val){
      cells.splice(i, 1);
    }
  }
}

function random_item(items){
  return items[Math.floor(Math.random()*items.length)];
}

function checkWinner(x){
  if((values[0] === x && values[3] === x && values[6] === x) || (values[1] === x && values[4] === x && values[7] === x) || (values[2] === x && values[5] === x && values[8] === x) || (values[0] === x && values[1] === x && values[2] === x) || (values[3] === x && values[4] === x && values[5] === x) || (values[6] === x && values[7] === x && values[8] === x) || (values[0] === x && values[4] === x && values[8] === x) || (values[2] === x && values[4] === x && values[6] === x)){
    if(x === 'X'){
      document.getElementById('you').innerHTML = "You won!";
    }else if(x === 'O'){
      document.getElementById('bot').innerHTML = level+" won!";
    }
    removeCursor();
    document.getElementById('reset').innerHTML = `<div onclick="resetGame()" class="reset"><i class="fa fa-repeat" aria-hidden="true"></i></div>`;
  }else{
    if(x === 'X'){
      playBot();
    }else if(x === 'O'){
      playYou();
    }
  }
  if(cells.length === 0){
    document.getElementById('reset').innerHTML = `<div onclick="resetGame()" class="reset"><i class="fa fa-repeat" aria-hidden="true"></i></div>`;
  }
}

function resetGame(){
  location.replace("./");
}

function addCursor(){
  for(let x in cells){
    document.getElementById('cell-'+cells[x]).classList.add('cursor');
  }
}

function removeCursor(){
  for(let x in cells){
    document.getElementById('cell-'+cells[x]).classList.remove('cursor');
  }
}

function botBrain(){
  var val = null;
  if(level === 'Jarvis' && values[4] !== 'X' && values[4] !== 'O'){
    val = 4;
  } else if((values[0] === "O" && values[3] === "O" && values[6] !== "O" && values[6] !== "X" && level === 'Jarvis') || (values[4] === "O" && values[2] === "O" && values[6] !== "O" && values[6] !== "X" && level === 'Jarvis') || (values[7] === "O" && values[8] === "O" && values[6] !== "O" && values[6] !== "X" && level === 'Jarvis')){
    val = 6;
  } else if((values[6] === "O" && values[3] === "O" && values[0] !== "O" && values[0] !== "X" && level === 'Jarvis') || (values[4] === "O" && values[8] === "O" && values[0] !== "O" && values[0] !== "X" && level === 'Jarvis') || (values[1] === "O" && values[2] === "O" && values[0] !== "O" && values[0] !== "X" && level === 'Jarvis')){
    val = 0;
  } else if((values[6] === "O" && values[4] === "O" && values[2] !== "O" && values[2] !== "X" && level === 'Jarvis') || (values[5] === "O" && values[8] === "O" && values[2] !== "O" && values[2] !== "X" && level === 'Jarvis') || (values[0] === "O" && values[1] === "O" && values[2] !== "O" && values[2] !== "X" && level === 'Jarvis')){
    val = 2;
  } else if((values[2] === "O" && values[5] === "O" && values[8] !== "O" && values[8] !== "X" && level === 'Jarvis') || (values[0] === "O" && values[4] === "O" && values[8] !== "O" && values[8] !== "X" && level === 'Jarvis') || (values[6] === "O" && values[7] === "O" && values[8] !== "O" && values[8] !== "X" && level === 'Jarvis')){
    val = 8;
  } else if((values[6] === "O" && values[0] === "O" && values[3] !== "O" && values[3] !== "X" && level === 'Jarvis') || (values[4] === "O" && values[5] === "O" && values[3] !== "O" && values[3] !== "X" && level === 'Jarvis')){
    val = 3;
  } else if((values[1] === "O" && values[4] === "O" && values[7] !== "O" && values[7] !== "X" && level === 'Jarvis') || (values[6] === "O" && values[8] === "O" && values[7] !== "O" && values[7] !== "X" && level === 'Jarvis')){
    val = 7;
  } else if((values[4] === "O" && values[7] === "O" && values[1] !== "O" && values[1] !== "X" && level === 'Jarvis') || (values[0] === "O" && values[2] === "O" && values[1] !== "O" && values[1] !== "X" && level === 'Jarvis')){
    val = 1;
  } else if((values[2] === "O" && values[8] === "O" && values[5] !== "O" && values[5] !== "X" && level === 'Jarvis') || (values[3] === "O" && values[4] === "O" && values[5] !== "O" && values[5] !== "X" && level === 'Jarvis')){
    val = 5;
  } else if((values[1] === "O" && values[7] === "O" && values[4] !== "O" && values[4] !== "X" && level === 'Jarvis') || (values[3] === "O" && values[5] === "O" && values[4] !== "O" && values[4] !== "X" && level === 'Jarvis') || (values[0] === "O" && values[8] === "O" && values[4] !== "O" && values[4] !== "X" && level === 'Jarvis') || (values[6] === "O" && values[2] === "O" && values[4] !== "O" && values[4] !== "X" && level === 'Jarvis')){
    val = 4;
  } else if((values[0] === "X" && values[3] === "X" && values[6] !== "O" && level !== 'Noob') || (values[4] === "X" && values[2] === "X" && values[6] !== "O" && level !== 'Noob') || (values[7] === "X" && values[8] === "X" && values[6] !== "O" && level !== 'Noob')){
    val = 6;
  } else if((values[6] === "X" && values[3] === "X" && values[0] !== "O" && level !== 'Noob') || (values[4] === "X" && values[8] === "X" && values[0] !== "O" && level !== 'Noob') || (values[1] === "X" && values[2] === "X" && values[0] !== "O" && level !== 'Noob')){
    val = 0;
  } else if((values[6] === "X" && values[4] === "X" && values[2] !== "O" && level !== 'Noob') || (values[5] === "X" && values[8] === "X" && values[2] !== "O" && level !== 'Noob') || (values[0] === "X" && values[1] === "X" && values[2] !== "O" && level !== 'Noob')){
    val = 2;
  } else if((values[2] === "X" && values[5] === "X" && values[8] !== "O" && level !== 'Noob') || (values[0] === "X" && values[4] === "X" && values[8] !== "O" && level !== 'Noob') || (values[6] === "X" && values[7] === "X" && values[8] !== "O" && level !== 'Noob')){
    val = 8;
  } else if((values[6] === "X" && values[0] === "X" && values[3] !== "O" && level !== 'Noob') || (values[4] === "X" && values[5] === "X" && values[3] !== "O" && level !== 'Noob')){
    val = 3;
  } else if((values[1] === "X" && values[4] === "X" && values[7] !== "O" && level !== 'Noob') || (values[6] === "X" && values[8] === "X" && values[7] !== "O" && level !== 'Noob')){
    val = 7;
  } else if((values[4] === "X" && values[7] === "X" && values[1] !== "O" && level !== 'Noob') || (values[0] === "X" && values[2] === "X" && values[1] !== "O" && level !== 'Noob')){
    val = 1;
  } else if((values[2] === "X" && values[8] === "X" && values[5] !== "O" && level !== 'Noob') || (values[3] === "X" && values[4] === "X" && values[5] !== "O" && level !== 'Noob')){
    val = 5;
  } else if((values[1] === "X" && values[7] === "X" && values[4] !== "O" && level !== 'Noob') || (values[3] === "X" && values[5] === "X" && values[4] !== "O" && level !== 'Noob') || (values[0] === "X" && values[8] === "X" && values[4] !== "O" && level !== 'Noob') || (values[6] === "X" && values[2] === "X" && values[4] !== "O" && level !== 'Noob')){
    val = 4;
  } else{
    val = random_item(cells);
  }
  return val;
}
