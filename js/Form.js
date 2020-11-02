class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset Game');
    this.volumeu = createButton('Volume Up');
    this.volumed = createButton('Volume Down');
    this.mute = createButton('Mute');
    this.unmute = createButton('Unmute');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth / 2 - 50, 0);

    this.input.position(displayWidth/2-50,displayHeight/2-80);
    this.button.position(displayWidth/2-50, displayHeight/2-50);
    this.reset.position(displayWidth/2+600,displayHeight/2-300);
    this.volumeu.position(displayWidth/2+600,displayHeight/2-320);
    this.volumed.position(displayWidth/2+600,displayHeight/2-340);
    this.mute.position(displayWidth/2+600,displayHeight/2-280);
    this.unmute.position(displayWidth/2+600,displayHeight/2-260);

      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

    this.reset.mousePressed(() => { 
      game.update(0);
      player.updateCount(0);
      form.display();
      Player.updateCarCount(0);
    })

    this.volumeu.mousePressed(() => {
        introsound.setVolume(1)
    })
    this.volumed.mousePressed(() => { 
      introsound.setVolume(0.5)
    })
    this.mute.mousePressed(() => {
      introsound.setVolume(0)
    })
    this.unmute.mousePressed(() => {
      introsound.setVolume(1)
    })
  }
}
