var ball,img,paddle;
function preload() {
  ballimg=loadImage('ball.png')
  paddleImg=loadImage('paddle.png')
  
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(200,200,20,20)
  paddle=createSprite(375,200,20,20)
  ball.addImage(ballimg)
  paddle.addImage(paddleImg)
  
  
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9
  

}

function draw() {
  background(205,153,0);
  edge=createEdgeSprites()
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edge[0])
  ball.bounceOff(edge[2])
  ball.bounceOff(edge[3])
  if(ball.collide(paddle)){
  ball.velocityX=-9
  console.log("hit")
  randomVelocity()
  }

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle)

  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
  paddle.y=paddle.y+20
  }
  drawSprites();
  
}

function randomVelocity()
{

  ball.velocityY=random(-8,8)
}

