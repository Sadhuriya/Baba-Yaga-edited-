class Form{
  constructor(){
      this.title=createElement('h1');
      this.updateLog=createElement('h1');
      this.controls=createElement('h1');
      this.about=createElement('h1');
      this.nameInput=createInput("Enter Your Name");
      this.Map1Button=createButton("#1 - GATHERING INTEL");
      this.Map2Button=createButton("Map 2");
      // this.Map3Button=createButton("Map 3");  

      this.homeButton = createButton("Home")
  }

  hide(){
    this.controls.hide();
    this.about.hide();
  }



  display(){
      background("black");
      fill("white");
      textSize(15);
      text('Created By - Mohammed Sohail  "c0mplex"  Rasul',500,630);
      textSize(15);
      text('1. Map Changes in MISSION #1',40,200);
      textSize(15);
      text('2. Added Bullet Trajectory Line',40,250);
      textSize(15);
      text('3. Fixed Hitbox Bugs',40,300);
      // text('hi',1050,400);
      text('4. UI Updated',40,350);
      text('VERSION- ALPHA 1.1',40,630);
      fill("grey");
      rect(945,0,10,653);
      fill("grey");
      rect(421,0,5,653);
      
      this.homeButton.hide();
      this.Map2Button.hide();

      this.title.html("BABA YAGA");
      this.title.position(width/2-100,50);
      this.title.style("color","white");

      this.updateLog.html("UPDATES");
      this.updateLog.position(100,50);
      this.updateLog.style("color","white");

      this.controls.html("CONTROLS");
      this.controls.position(1050,50);
      this.controls.style("color","white");

      this.about.html('STORY');
      this.about.position(1100,350);
      this.about.style("color","white");

      this.nameInput.position(width/2-100,150);

      this.Map1Button.position(width/2-100,250);
      this.Map2Button.position(width/2-100,350);
      this.homeButton.position(width/2 - 100,height/2 +50)

      this.Map1Button.mousePressed(()=>{
      this.nameInput.hide();
      this.title.hide();
      this.updateLog.hide();
      name= this.nameInput.value();
      this.Map1Button.hide();
      gameState=2;
      })  
    }

    restart(){
      this.homeButton.show();
      this.homeButton.mousePressed(()=>{
      this.homeButton.hide();
      this.nameInput.show();
      this.title.show();
      this.updateLog.show();
      this.Map1Button.show();
      this.controls.show();
      this.about.show();
        gameState = 1;
        health = 100;
        player.x = 600;
        player.y = 500;
      })
    }

    map2(){
      this.Map2Button.show();

    }
}