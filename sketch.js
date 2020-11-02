var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4,cars;

var car1img , car2img, car3img, car4img;
var trackimg;
var groundimg;
var form, player, game;
var introsound;
//var carsound;

function preload(){
    //soundFormats('mp3', 'ogg')
    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img =  loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");
    trackimg = loadImage("images/track.jpg");
    groundimg = loadImage("images/ground.png");
    backgroundImage = loadImage("images/download.jpg");
    introsound = loadSound("sound/bgmusic.mp3");
    //carsound = loadSound("");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight); // width, height
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(gameState === 0){                      
    background('White');
    background(backgroundImage);
    introsound.play();
  }
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
