var mario,background,obstacles;

function preload()
{
    Mario=loadImage("Mario1.png")
    Marioo=loadImage("Mario2.png")
    Background=loadImage("Grass.jpg")
    Obstacles=loadImage("Obstacles2.jpg")

}
function setup()
{
    createCanvas(1000,1000)
    
    background.velocityX=-5;

    
    
    

    mario=createSprite(100,690,40,40)
    mario.velocityX=5;
    mario.addImage(Mario)
    mario.scale=1.5
    
    
    


}
function draw()
{
  
    background(Background)
    

    if(frameCount%60===0)
    {
        obstacles=createSprite(900,650,20,20)
        obstacles.addImage(Obstacles)
        obstacles.velocityX=-5
    }

    fill("black")
    noStroke()
    text(mouseX,100,100)
    text(mouseY,120,120)

    if(keyDown==="UP_ARROW")
    {
        mario.velocityY=-10
    }
    
  
    drawSprites()  
}