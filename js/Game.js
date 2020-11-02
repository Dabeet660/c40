class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200,70,70);
    car1.addImage("car1",car1img);
    car2 = createSprite(300,200,70,70);
    car2.addImage("car2",car2img);
    car3 = createSprite(500,200,70,70);
    car3.addImage("car3",car3img);
    car4 = createSprite(700,200,70,70);
    car4.addImage("car4",car4img);
    cars = [car1,car2,car3,car4];
  }

  play(){
    form.hide();
    textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getCarCount();

    if(allPlayers !== undefined){
      background(rgb(198,137,103));
      image(trackimg,0,-1*displayHeight*4,displayWidth,displayHeight*5); 
     // var display_position = 130;
     var index = 0;
     var x = 250;
     var y;
      for(var plr in allPlayers){
       index++;
       x=x+260;
       y=displayHeight/2-allPlayers[plr].distance;
       cars[index-1].x=x;
       cars[index-1].y=y;

       if(index == player.index){ 
        //cars[index-1].shapeColor = "Red"
        push();
        stroke(rgb(12, 226, 9))
        ellipse(x,y,70,100);
        pop();
        camera.position.x = displayWidth / 2;
        camera.position.y = cars[index -1].y;
       }
       
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 10;
      console.log(player.distance);
      player.update();
    }
    if(player.distance > 4700){
    gameState = 2;
    //game.update(2);
    background(groundimg);
    player.rank += 1;
    Player.updateCarCount(player.rank);
    text(`Your rank is ${player.rank}`,displayWidth/2,y-120)
    }
    drawSprites();
  }
  
  end(){
    console.log(player.rank);
  }
}
