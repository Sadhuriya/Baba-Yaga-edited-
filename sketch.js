var wall,wallimg
var box,boximg,boxes,boxesimg
var house,houseimg;
var player,playerRimg,playershootRimg;
var enemyF,enemyFimg,enemyshootFimg;
var stone,stoneimg;
var tree,treeimg;
var bg;
var wallH,wallHimg;
var grass,grassimg;
var ground,groundimg;
var bench,benchimg,benchHimg;
var pond,pondimg
var bullet,bulletimg;
var trophy=0;
var health=100;
var health100,health80,health60,health40,health20,health0;
var form,game;
var gunshot;
var gameState=1;
var name='';
var Colliders


    

function preload(){
wallimg=loadImage("Images/Wall.png");
boximg=loadImage("Images/Box.png");
boxesimg=loadImage("Images/Boxes.png");
houseimg=loadImage("Images/Hostages.png");
playerimg=loadImage("Images/PlayerR.png");
playershootimg=loadImage("Images/PlayerShootR.png");
enemyimg=loadImage("Images/EnemyR.png");
enemyshootimg=loadImage("Images/EnemyShootR.png");
stoneimg=loadImage("Images/Stone.png");
treeimg=loadImage("Images/Tree.png");
bg=loadImage("Images/Map1.png");
wallHimg=loadImage("Images/WallH.png");
grassimg=loadImage("Images/grass.png");
groundimg=loadImage("Images/ground.png");
benchimg=loadImage("Images/bench.png");
benchHimg=loadImage("Images/benchH.png")
pondimg=loadImage("Images/Pond.png");
bulletimg=loadImage("Images/Bullet.png");
health100=loadImage("Images/100.png");
health80=loadImage("Images/80.png");
health60=loadImage("Images/60.png");
health40=loadImage("Images/40.png");
health20=loadImage("Images/20.png");
health0=loadImage("Images/0.png");
gunshot=loadSound("gunshot.mp3");
}

function setup(){
    createCanvas(1366,653);

    form= new Form();
    

    edges=createEdgeSprites();

    player= createSprite(600,500,20,20);
    player.addImage("p",playerimg);
    player.addImage("ps",playershootimg);
    player.scale=0.5;

    Colliders=new Group();
    bulletGroup=new Group();
    bulletsGroup=new Group();
    wallGroup = new Group();

    // WALLS
    wall1= createSprite(150,400,20,20);
    wall1.addImage(wallHimg);
    wall2=createSprite(210,400,20,20);
    wall2.addImage(wallHimg);
    wall3=createSprite(270,400,20,20);
    wall3.addImage(wallHimg);
    wall4=createSprite(330,400,20,20);
    wall4.addImage(wallHimg);
    wall5=createSprite(390,400,20,20);
    wall5.addImage(wallHimg);
    wall19=createSprite(90,400,20,20);
    wall19.addImage(wallHimg);
    wall20=createSprite(30,400,20,20);
    wall20.addImage(wallHimg);

    wall6=createSprite(510,400,20,20);
    wall6.addImage(wallHimg);
    wall7=createSprite(570,400,20,20);
    wall7.addImage(wallHimg);
    wall8=createSprite(630,400,20,20);
    wall8.addImage(wallHimg);
    wall9=createSprite(690,400,20,20);
    wall9.addImage(wallHimg);
    wall10=createSprite(750,400,20,20);
    wall10.addImage(wallHimg);

    wall11=createSprite(770,350,20,20);
    wall11.addImage(wallimg)
    wall12=createSprite(770,300,20,20)
    wall12.addImage(wallimg);
    wall13=createSprite(770,250,20,20);
    wall13.addImage(wallimg);
    wall14=createSprite(770,200,20,20);
    wall14.addImage(wallimg);
    wall15=createSprite(770,150,20,20);
    wall15.addImage(wallimg);

    wall16=createSprite(795,120,20,20);
    wall16.addImage(wallHimg)
    wall17=createSprite(855,120,20,20);
    wall17.addImage(wallHimg);
    wall18=createSprite(915,120,20,20);
    wall18.addImage(wallHimg);

    wall21=createSprite(935,70,20,20);
    wall21.addImage(wallimg);
    wall22=createSprite(935,20,20,20);
    wall22.addImage(wallimg)
    wallinv=createSprite(935,-30,20,20);

    //left= x dist- 26, y dist- 32.5
    // right =x dist+20 y dist -32.5
    wall23=createSprite(570,100,20,20);
    wall23.addImage(wallHimg);
    wall24=createSprite(544,67.5,20,20);
    wall24.addImage(wallimg);
    wall25=createSprite(350,200,20,20);
    wall25.addImage(wallHimg);
    wall26=createSprite(370,167.5,20,20);
    wall26.addImage(wallimg);

    wallGroup.add(wall1);
    wallGroup.add(wall2);
    wallGroup.add(wall3);
    wallGroup.add(wall4);
    wallGroup.add(wall5);
    wallGroup.add(wall6);
    wallGroup.add(wall7);
    wallGroup.add(wall8);
    wallGroup.add(wall9);
    wallGroup.add(wall10);
    wallGroup.add(wall11);
    wallGroup.add(wall12);
    wallGroup.add(wall13);
    wallGroup.add(wall14);
    wallGroup.add(wall15);
    wallGroup.add(wall16);
    wallGroup.add(wall17);
    wallGroup.add(wall18);
    wallGroup.add(wall19);
    wallGroup.add(wall20);
    wallGroup.add(wall21);
    wallGroup.add(wall22);
    wallGroup.add(wall23);
    wallGroup.add(wall24);
    wallGroup.add(wall25);
    wallGroup.add(wall26);

    //stones
    stone1=createSprite(170,320,20,20);
    stone1.addImage(stoneimg);
    stone2=createSprite(400,70,20,20)
    stone2.addImage(stoneimg);

    
    // trees
    tree1=createSprite(200,120,20,20);
    tree1.addImage(treeimg);
    tree2=createSprite(460,230,20,20);
    tree2.addImage(treeimg);
    tree3=createSprite(200,520,20,20);
    tree3.addImage(treeimg);
    tree4=createSprite(240,590,20,20);
    tree4.addImage(treeimg);
    tree5=createSprite(500,480,20,20);
    tree5.addImage(treeimg);
    tree6=createSprite(830,320,20,20);
    tree6.addImage(treeimg);
    tree7=createSprite(650,560,20,20);
    tree7.addImage(treeimg);
    tree8=createSprite(780,530,20,20);
    tree8.addImage(treeimg);
    

    // boxes
    box1=createSprite(680,250,20,20);
    box1.addImage(boxesimg);
    box2=createSprite(160,190,20,20);
    box2.addImage(boxesimg);
    box3=createSprite(750,50,20,20);
    box3.addImage(boxesimg);

    // grass
    grass1=createSprite(500,350,20,20);
    grass1.addImage(grassimg);
    grass1.scale=0.5
    grass2=createSprite(300,300,20,20);
    grass2.addImage(grassimg);
    grass2.scale=0.5
    grass3=createSprite(270,130,20,20);
    grass3.addImage(grassimg);
    grass3.scale=0.5
    grass4=createSprite(700,170,20,20);
    grass4.addImage(grassimg);
    grass4.scale=0.5
    grass5=createSprite(80,270,20,20);
    grass5.addImage(grassimg);
    grass5.scale=0.5
    grass6=createSprite(500,550,20,20);
    grass6.addImage(grassimg);
    grass6.scale=0.5
    grass7=createSprite(690,490,20,20);
    grass7.addImage(grassimg);
    grass7.scale=0.5
    grass8=createSprite(880,250,20,20);
    grass8.addImage(grassimg);
    grass8.scale=0.5
    grass9=createSprite(50,600,20,20);
    grass9.addImage(grassimg);
    grass9.scale=0.5
    grass10=createSprite(500,350,20,20);
    grass10.addImage(grassimg);
    grass10.scale=0.5

    // Dirt
    dirt1=createSprite(230,200,20,20);
    dirt1.addImage(groundimg);  
    dirt4=createSprite(630,160,20,20);
    dirt4.addImage(groundimg);
    dirt6=createSprite(600,340,20,20);
    dirt6.addImage(groundimg);
    dirt7=createSprite(400,500,20,20);
    dirt7.addImage(groundimg);
    dirt9=createSprite(840,500,20,20);
    dirt9.addImage(groundimg);
    dirt10=createSprite(100,600,20,20);
    dirt10.addImage(groundimg);
    dirt11=createSprite(100,70,20,20);
    dirt11.addImage(groundimg)

    // Pond
    pond1=createSprite(50,500,20,20);
    pond1.addImage(pondimg);
    pond1.scale=1.5

    // bench
    bench1=createSprite(400,340,20,20);
    bench1.addImage(benchimg);
    bench2=createSprite(500,180,20,20);
    bench2.addImage(benchHimg);
    bench3=createSprite(880,200,20,20);
    bench3.addImage(benchimg);
    bench4=createSprite(50,150,20,20);
    bench4.addImage(benchHimg);

    // Hostages
    house1=createSprite(50,50,20,20);
    house1.addImage(houseimg);

    //enemies
    enemy1=createSprite(120,330,20,20);
    enemy1.addImage("e",enemyimg);
    enemy1.addImage("s",enemyshootimg);
    enemy1.scale=0.5;
    enemy2=createSprite(200,180,20,20);
    enemy2.addImage("e",enemyimg);
    enemy2.addImage("s",enemyshootimg);
    enemy2.scale=0.5;
    enemy3=createSprite(425,65,20,20);
    enemy3.addImage("e",enemyimg);
    enemy3.addImage("s",enemyshootimg);
    enemy3.scale=0.5;
    enemy4=createSprite(614,100,20,20);
    enemy4.addImage("e",enemyimg);
    enemy4.addImage("s",enemyshootimg);
    enemy4.scale=0.5;
    enemy5=createSprite(713,310,20,20);
    enemy5.addImage("e",enemyimg);
    enemy5.addImage("s",enemyshootimg);
    enemy5.scale=0.5;
    enemy6=createSprite(55,115,20,20);
    enemy6.addImage("e",enemyimg);
    enemy6.addImage("s",enemyshootimg);
    enemy6.scale=0.5;
    

    enemyBullet=new Group()
    // SECRET
    secret=createSprite(757,388,10,10);

    //health
    health1=createSprite(870,630,10,10);
    health1.addImage("100",health100);
    health1.addImage("80",health80);
    health1.addImage("60",health60);
    health1.addImage("40",health40);
    health1.addImage("20",health20);
    health1.addImage("0",health0);

    // SET COLLIDERS
    wall1.setCollider("rectangle",0,0,100,20);
    wall2.setCollider("rectangle",0,0,100,20);
    wall3.setCollider("rectangle",0,0,100,20);
    wall4.setCollider("rectangle",0,0,100,20);
    wall5.setCollider("rectangle",0,0,60,20);
    wall6.setCollider("rectangle",0,0,60,20);
    wall7.setCollider("rectangle",0,0,100,20);
    wall8.setCollider("rectangle",0,0,100,20);
    wall9.setCollider("rectangle",0,0,100,20);
    wall10.setCollider("rectangle",0,0,100,20);
    wall11.setCollider("rectangle",0,0,20,100);
    wall12.setCollider("rectangle",0,0,20,100);
    wall13.setCollider("rectangle",0,0,20,100);
    wall14.setCollider("rectangle",0,0,20,100);
    wall15.setCollider("rectangle",0,0,20,100);
    wall16.setCollider("rectangle",0,0,100,20);
    wall17.setCollider("rectangle",0,0,100,20);
    wall18.setCollider("rectangle",0,0,100,20);
    wall19.setCollider("rectangle",0,0,100,20);
    wall20.setCollider("rectangle",0,0,100,20);
    wall21.setCollider("rectangle",0,0,20,100);
    wall22.setCollider("rectangle",0,0,20,100);
    wallinv.setCollider("rectangle",0,0,20,2000);
    wall23.setCollider("rectangle",-10,0,70,20);
    wall24.setCollider("rectangle",0,0,20,70);
    wall25.setCollider("rectangle",-10,0,70,20);
    wall26.setCollider("rectangle",0,0,20,70);;
    box1.setCollider("circle",0,0,40);
    box2.setCollider("circle",0,10,30);
    box3.setCollider("circle",0,0,40);
    stone1.setCollider("circle",-7,7,20);
    stone2.setCollider("circle",-7,7,20);
    tree1.setCollider("circle",-4,0,15);
    tree2.setCollider("circle",-4,0,15);
    tree3.setCollider("circle",-4,0,15);
    tree4.setCollider("circle",-4,0,15);
    tree5.setCollider("circle",-4,0,15);
    tree6.setCollider("circle",-4,0,15);
    tree7.setCollider("circle",-4,0,15);
    tree8.setCollider("circle",-4,0,15);
    pond1.setCollider("circle",-25,-10,50);
    house1.setCollider("rectangle",-20,0,40,90)


    player.setCollider("circle",0,-20,20)


}


function draw(){

    console.log(gameState)

    if(gameState === 1){
        form.display();
    }
    
    if(gameState===2){
        gameBegin();
        playerMovement()
        trajectory();
        destroyEnemy();
        enemyShoot();
        healthImage()
        drawSprites();
    }


    if(player.isTouching(secret)){
        text("CONGRATULATIONS, YOU HAVE FOUND THE TROPHY!",500,600);
        trophy = trophy+1;
    }

    if(player.isTouching(house1)){
        gameState = "won1";
        form.hide();
    }

    if(gameState === "won1"){
        background ("black")
        textSize (45)
        fill("green")
        text ("Mission Accomplished!!!!", width/2 - 300, height/2);
        form.retstart();
        form.map2();
    }



    



    player.collide(wallGroup)
  
    player.collide(wallinv);
   
    player.collide(box1);
    player.collide(box2);
    player.collide(box3);
    player.collide(tree1);
    player.collide(tree2);
    player.collide(tree3);
    player.collide(tree4);
    player.collide(tree5);
    player.collide(tree6);
    player.collide(tree7);
    player.collide(tree8);
    player.collide(pond1);
    player.collide(stone1);
    player.collide(stone2);
    player.collide(house1);

    if(bulletGroup.isTouching(wallGroup)){
        bulletGroup.destroyEach()
    }
    
    bulletGroup.collide(stone1);
    bulletGroup.collide(stone2);

    if(enemyBullet.isTouching(wallGroup)){
        enemyBullet.destroyEach()
    }

    enemyBullet.collide(stone1);
    enemyBullet.collide(stone2);

    

    
    fill("black");
    rect(950,0,431,653);

    //texts
    fill("white")
    textSize(15);
    text('= MOVE WITH W,A,S,D =',1050,150);
    text('= PRESS SPACEBAR TO SHOOT =',1050,170);
    text('= USE MOUSE TO AIM =',1050,190);
    text('= BULLETS HAVE LIMITED RANGE =',1050,210);
    text('= BULLETS PASS THROUGH -',1050,230);
    text('= TREES, BENCHES AND BOXES =',1080,250);
    text('= BULLETS COLLIDE WITH -',1050,270);
    text('= STONE & WALLS =',1080,290)
    text('====================================',1020,310);

   
   
    if(gameState!=2){
    text('Your character was part of an Elite Squad which',1020,450);
    text('was called in for secret missions carried out around',1020,470);
    text('the globe. During your last mission, your entire',1020,490);
    text('squad was eliminated by the most wanted man in',1020,510);
    text('history, Marko Tarkov. You set out for revenge',1020,530);
    text('and swear that your name will haunt every',1020,550);
    text('Wrong-Doer for hundreds of years ...',1020,570);
    textSize(20)
    text('BABA YAGA .....',1020,620)
    textSize(15);
    text('You Have Found '+trophy+' trophies',600,590);
    }

    if(gameState===2){
    textSize(15);
    text('You have recieved information about the location',1020,450);
    text('of one of Tarkovs hideouts where his plans may be',1020,470);
    text('kept. Your goal is to eliminate all the hostiles',1020,490);
    text('and steal the plans. GOOD LUCK!',1020,510);
    }

    player.depth=dirt1.depth+50;

    if(gameState === 3){
        end();
        form.hide();
    }

    //console.log(player.x,player.y) 
}

function gameBegin(){
    background("green");
    fill("grey");
    rect(945,0,10,653);
    player.pointTo(mouseX,mouseY);
    text(name,player.x-20,player.y+33);
}

function healthImage(){
    if (health === 100){
    health1.changeImage("100",health100)
    }else if (health === 80){
        health1.changeImage("80",health80)
    }else if (health === 60){
        health1.changeImage("60",health60)
    }else if (health === 40){
        health1.changeImage("40",health40)
    }else if (health === 20){
        health1.changeImage("20",health20)
    }else if (health === 0){
        health1.changeImage("0",health0)
        gameState = 3
    }
}

function playerMovement(){   
    if(keyDown("w")){
        player.y=player.y-3;
    }
    if(keyDown("s")){
        player.y=player.y+3;
    }
    if(keyDown("a")){
        player.x=player.x-3
    }
    if(keyDown("d")){
        player.x=player.x+3
    }
}

function trajectory(){
    if(mouseX - player.x < 200 && mouseY - player.y < 200 && player.x - mouseX< 200 && player.y - mouseY<200){
        for(var i=0; i< 200; i = i+20){ 
            push()
            stroke(255)
            strokeWeight(3) 
            line(player.x,player.y,mouseX,mouseY)
            pop()
        } 
        if(keyWentDown("space") && gameState===2){
            player.changeImage("ps",playershootimg);
            bullet=createSprite(player.x,player.y,10,10);
            bullet.addImage(bulletimg);
            bullet.setCollider("rectangle",0,0,10,10);
            bulletGroup.add(bullet)
            
            PlayerShoot(bullet);
            gunshot.play();  
        }
        if(keyWentUp("space")&& gameState===2){
            player.changeImage("p",playerimg);
        }
    }
}

function destroyEnemy(){
    if(bulletGroup.isTouching(enemy1)){
        enemy1.x = -500
        enemy1.destroy();
        enemyBullet.destroyEach()
    }
    if(bulletGroup.isTouching(enemy2)){
        enemy2.x = -500
        enemy2.destroy();
        enemyBullet.destroyEach()
    }
    if(bulletGroup.isTouching(enemy3)){
        enemy3.x = -500
        enemy3.destroy();
        enemyBullet.destroyEach()
    }
    if(bulletGroup.isTouching(enemy4)){
        enemy4.x = -500
        enemy4.destroy();
        enemyBullet.destroyEach()
    }
    if(bulletGroup.isTouching(enemy5)){
        enemy5.x = -500
        enemy5.destroy();
        enemyBullet.destroyEach()
    }
    if(bulletGroup.isTouching(enemy6)){
        enemy6.x = -500
        enemy6.destroy();
        enemyBullet.destroyEach()
    }
}


function enemyShoot(){      
    if(player.x-enemy1.x<150 && player.y-enemy1.y<150 && enemy1.x-player.x<150 && enemy1.y-player.y<150 ){
        enemy1.pointTo(player.x,player.y);
        enemy1.changeImage("s",enemyshootimg);
        if(frameCount%20 === 0 ){
            ebullet=createSprite(enemy1.x +30,enemy1.y+15,10,10);
            ebullet.addImage(bulletimg);
            ebullet.setCollider("rectangle",0,0,10,10);
            enemyBullet.add(ebullet)
            shoot(ebullet,player);
            }
        if(enemyBullet.isTouching(player)){
                enemyBullet.destroyEach()
                health = health -20;
        }
    }else{
        enemy1.changeImage("e",enemyimg);
    }

    if(player.x-enemy2.x<150 && player.y-enemy2.y<150 && enemy2.x-player.x<150 && enemy2.y-player.y<150){
        enemy2.pointTo(player.x,player.y);
        enemy2.changeImage("s",enemyshootimg);
        if(frameCount%20 === 0){
            ebullet=createSprite(enemy2.x +30,enemy2.y+15,10,10);
            ebullet.addImage(bulletimg);
            ebullet.setCollider("rectangle",0,0,10,10);
            enemyBullet.add(ebullet)
            shoot(ebullet,player);
        }
        if(enemyBullet.isTouching(player)){
                enemyBullet.destroyEach()
                health = health -20;
        }
    }else{
        enemy2.changeImage("e",enemyimg);
    }

    if(player.x-enemy3.x<150 && player.y-enemy3.y<150 && enemy3.x-player.x<150 && enemy3.y-player.y<150){
        enemy3.pointTo(player.x,player.y);
        enemy3.changeImage("s",enemyshootimg);
        if(frameCount%20 === 0 ){
            
            ebullet=createSprite(enemy3.x +30,enemy3.y+15,10,10);
            ebullet.addImage(bulletimg);
            ebullet.setCollider("rectangle",0,0,10,10);
            enemyBullet.add(ebullet)
            shoot(ebullet,player);
            }
        if(enemyBullet.isTouching(player)){
                enemyBullet.destroyEach()
                health = health -20;
        }
    } else{
        enemy3.changeImage("e",enemyimg);
    }

    if(player.x-enemy4.x<150 && player.y-enemy4.y<150 && enemy4.x-player.x<150 && enemy4.y-player.y<150){
        enemy4.pointTo(player.x,player.y);
        enemy4.changeImage("s",enemyshootimg);
        if(frameCount%20 === 0){
            ebullet=createSprite(enemy4.x +30,enemy4.y+15,10,10);
            ebullet.addImage(bulletimg);
            ebullet.setCollider("rectangle",0,0,10,10);
            enemyBullet.add(ebullet)
            shoot(ebullet,player);
            }
            
                
            if(enemyBullet.isTouching(player)){
                enemyBullet.destroyEach()
                health = health -20;
            }
    }else{
        enemy4.changeImage("e",enemyimg);
    }

    if(player.x-enemy5.x<150 && player.y-enemy5.y<150 && enemy5.x-player.x<150 && enemy5.y-player.y<150){
        enemy5.pointTo(player.x,player.y);
        enemy5.changeImage("s",enemyshootimg);
        if(frameCount%20 === 0){
            ebullet=createSprite(enemy5.x +30,enemy5.y+15,10,10);
            ebullet.addImage(bulletimg);
            ebullet.setCollider("rectangle",0,0,10,10);
            enemyBullet.add(ebullet)
            shoot(ebullet,player);
            }
            
                
            if(enemyBullet.isTouching(player)){
                enemyBullet.destroyEach()
                health = health -20;
            }
    }else{
        enemy5.changeImage("e",enemyimg);
    }

    if(player.x-enemy6.x<150 && player.y-enemy6.y<150 && enemy6.x-player.x<150 && enemy6.y-player.y<150){
        enemy6.pointTo(player.x,player.y);
        enemy6.changeImage("s",enemyshootimg);
        if(frameCount%20 === 0){
            ebullet=createSprite(enemy6.x +30,enemy6.y+15,10,10);
            ebullet.addImage(bulletimg);
            ebullet.setCollider("rectangle",0,0,10,10);
            enemyBullet.add(ebullet)
            shoot(ebullet,player);
            }
            
                
            if(enemyBullet.isTouching(player)){
                enemyBullet.destroyEach()
                health = health -20;
            }
    }else{
        enemy6.changeImage("e",enemyimg);
    }
}

function end(){
    background ("black")
    textSize (45)
    fill("red")
    text ("Mission Incomplete!!!!", width/2 - 300, height/2)
    form.restart();

}

function shoot(b,p) {
     //console.log("calling");
      var x1 = p.x - b.x; 
      var y1 = p.y - b.y;
       var x2 = b.x-p.x; 
       var y2 = b.y-p.y ;
        // Using pythagoras' theorm to find the distance (the length of the vector) 
        var l1 = Math.sqrt(x1 * x1 + y1 * y1); 
        var l3 = Math.sqrt(x1 * x1 + y2 * y2); 
        // Dividing by the distance gives a normalized vector whose length is 1 
        x1 = x1/l1;
        y1 = y1/l1;
        x2 = x2/l3;
        y2 = y2/l3 ;
        if(p.x >= b.x && p.y >= b.y){
             b.velocityX = x1 * 10 
             b.velocityY = y1 * 10 
        } 
        if(p.x > b.x && p.y < b.y){
            b.velocityX = x1 * 10 
            b.velocityY = -y2 * 10
         } 
        if(p.x < b.x && p.y > b.y){
               b.velocityX = -x2 * 10 
            b.velocityY = y1 * 10 
        } 
        if(p.x < b.x && p.y < b.y){
              b.velocityX = -x2 * 10
            b.velocityY = -y2 * 10 
        } 
}

function PlayerShoot(b) {
           // console.log("calling");
             var x1 = mouseX - b.x; 
             var y1 = mouseY - b.y;
              var x2 = b.x-mouseX; 
              var y2 = b.y-mouseY;
               // Using pythagoras' theorm to find the distance (the length of the vector) 
               var l1 = Math.sqrt(x1 * x1 + y1 * y1); 
               var l3 = Math.sqrt(x1 * x1 + y2 * y2); 
               // Dividing by the distance gives a normalized vector whose length is 1 
               x1 = x1/l1;
               y1 = y1/l1;
               x2 = x2/l3;
                y2 = y2/l3 ;
               if(mouseX >= b.x && mouseY  >= b.y){
                    b.velocityX = x1 * 20 
                    b.velocityY = y1 * 20 
                } 
               if(mouseX > b.x && mouseY  < b.y){
                      b.velocityX = x1 * 20 
                   b.velocityY = -y2 * 20 
                } 
               if(mouseX < b.x && mouseY  > b.y){
                      b.velocityX = -x2 * 20 
                   b.velocityY = y1 * 20 
                } 
               if(mouseX< b.x && mouseY  < b.y){  
                    b.velocityX = -x2 * 20
                   b.velocityY = -y2 * 20
                 } 
}