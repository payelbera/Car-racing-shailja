var database;
var gameState = 0 ;
var playerCount;
var game;
var form;
var player;
var allPlayers;
var car1,car2,car3,car4,cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-70);
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  if(playerCount === 2){
    game.update(1)
  }
  if(gameState === 1){
    clear()
    game.play()
  }
}
