var gameState=0;
var playerCount=0;
var database;
var form, player, game;
var allPlayers;

function preload(){

}

function setup(){
canvas=createCanvas(800, 400);
database=firebase.database();
game=new Game();
game.getState();
game.start();
}

function draw(){
    if(playerCount===2){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
}