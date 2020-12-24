var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount===4){
    // game.update();
    gameState = 1;
    game.update(gameState);
  }
  if (gameState===1){
    clear();
    game.play();
  }
}
