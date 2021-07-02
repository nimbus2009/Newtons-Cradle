const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4,ball5;
var con1,con2,con3,con4,con5;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true,
		restitution:0,			
	}

	roof = Bodies.rectangle(width/2,100,230,20,roof_options);
    World.add(world,roof);

	/* -------------------------------------------------------------------------- */

	ball1=Bodies.circle(roof.position.x,roof.position.y+100,10);
	World.add(world,ball1);

	con1=Matter.Constraint.create({
		pointA : {x : roof.position.x , y : roof.position.y},
		bodyB : ball1,
		length: 100,
	});

	World.add(world,con1);

	/* -------------------------------------------------------------------------- */

	ball2=Bodies.circle(roof.position.x-20,roof.position.y+100,10);
	World.add(world,ball2);

	con2=Matter.Constraint.create({
		pointA : {x : roof.position.x-20 , y : roof.position.y},
		bodyB : ball2,
		length: 100,
	});

	World.add(world,con2);

	/* -------------------------------------------------------------------------- */

	ball3=Bodies.circle(roof.position.x-40,roof.position.y+100,10);
	World.add(world,ball3);

	con3=Matter.Constraint.create({
		pointA : {x : roof.position.x-40 , y : roof.position.y},
		bodyB : ball3,
		length: 100,
	});

	World.add(world,con3);

	/* -------------------------------------------------------------------------- */

	ball4=Bodies.circle(roof.position.x+20,roof.position.y+100,10);
	World.add(world,ball4);

	con4=Matter.Constraint.create({
		pointA : {x : roof.position.x+20 , y : roof.position.y},
		bodyB : ball4,
		length: 100,
	});

	World.add(world,con4);

	/* -------------------------------------------------------------------------- */

	ball5=Bodies.circle(roof.position.x+40,roof.position.y+100,10);
	World.add(world,ball5);

	con5=Matter.Constraint.create({
		pointA : {x : roof.position.x+40 , y : roof.position.y},
		bodyB : ball5,
		length: 100,
	});

	World.add(world,con5);

	//Engine.run(engine);
	
	ball1.restitution=1;
	ball2.restitution=1;
	ball3.restitution=1;
	ball4.restitution=1;
	ball5.restitution=1;
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	line(ball1.position.x,ball1.position.y,con1.pointA.x,con1.pointA.y);
	line(ball2.position.x,ball2.position.y,con2.pointA.x,con2.pointA.y);
	line(ball3.position.x,ball3.position.y,con3.pointA.x,con3.pointA.y);
	line(ball4.position.x,ball4.position.y,con4.pointA.x,con4.pointA.y);
	line(ball5.position.x,ball5.position.y,con5.pointA.x,con5.pointA.y);
  
  //create ellipse shape for multiple bobs here
	ellipse(ball1.position.x,ball1.position.y,20);
	ellipse(ball2.position.x,ball2.position.y,20);
	ellipse(ball3.position.x,ball3.position.y,20);
	ellipse(ball4.position.x,ball4.position.y,20);
	ellipse(ball5.position.x,ball5.position.y,20);

	text("Press any number key \nto release that many\nnumber of pendulum bobs at a time",width/2-100,height/2);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if(keyCode==49) {
		Matter.Body.applyForce(ball3,ball3.position,{x:50,y:-45});
	}
	if(keyCode==50) {
		Matter.Body.applyForce(ball3,ball3.position,{x:-0.008,y:0});
		Matter.Body.applyForce(ball2,ball2.position,{x:-0.0095,y:0});
	}
	if(keyCode==51) {
		Matter.Body.applyForce(ball3,ball3.position,{x:-0.0085,y:0});
		Matter.Body.applyForce(ball2,ball2.position,{x:-0.0095,y:0});
		Matter.Body.applyForce(ball1,ball1.position,{x:-0.0095,y:0});
	}
	if(keyCode==52) {
		Matter.Body.applyForce(ball3,ball3.position,{x:-0.008,y:0});
		Matter.Body.applyForce(ball2,ball2.position,{x:-0.009,y:0});
		Matter.Body.applyForce(ball1,ball1.position,{x:-0.009,y:0});
		Matter.Body.applyForce(ball4,ball4.position,{x:-0.009,y:0});
	}
	if(keyCode==53) {
		Matter.Body.applyForce(ball3,ball3.position,{x:-0.008,y:0});
		Matter.Body.applyForce(ball2,ball2.position,{x:-0.009,y:0});
		Matter.Body.applyForce(ball1,ball1.position,{x:-0.009,y:0});
		Matter.Body.applyForce(ball4,ball4.position,{x:-0.009,y:0});
		Matter.Body.applyForce(ball5,ball5.position,{x:-0.009,y:0});
	}
}