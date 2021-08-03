const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob, bob2, bob3, bob4;
var con, con2, con3, con4;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options = {
		isStatic: true
	}
	var boboptions = { restitution: 1.5, friction: 1.0 };
	bob = Bodies.circle(320, 300, 20, boboptions);
	World.add(world, bob);

	bob2 = Bodies.circle(370, 300, 20, boboptions);
	World.add(world, bob2);

	bob3 = Bodies.circle(420, 300, 20, boboptions);
	World.add(world, bob3);

	bob4 = Bodies.circle(470, 300, 20, boboptions);
	World.add(world, bob4);

	roof = Bodies.rectangle(400, 100, 230, 20, roof_options);
	World.add(world, roof);

	Engine.run(engine);

	con = Matter.Constraint.create({
		pointA: { x: 320, y: 100 },
		bodyB: bob,
		pointB: { x: 0, y: 0 },
		length: 300,
		stiffness: 0.5
	})

	World.add(world, con)

	con2 = Matter.Constraint.create({
		pointA: { x: 370, y: 100 },
		bodyB: bob2,
		pointB: { x: 0, y: 0 },
		length: 300,
		stiffness: 0.5
	})

	World.add(world, con2)

	con3 = Matter.Constraint.create({
		pointA: { x: 420, y: 100 },
		bodyB: bob3,
		pointB: { x: 0, y: 0 },
		length: 300,
		stiffness: 0.5
	})

	World.add(world, con3)

	con4 = Matter.Constraint.create({
		pointA: { x: 470, y: 100 },
		bodyB: bob4,
		pointB: { x: 0, y: 0 },
		length: 300,
		stiffness: 0.5
	})

	World.add(world, con4)


}

function draw() {
	rectMode(CENTER);
	background("#99004d");


	ellipse(bob.position.x, bob.position.y, 30);
	ellipse(bob2.position.x, bob2.position.y, 30);
	ellipse(bob3.position.x, bob3.position.y, 30);
	ellipse(bob4.position.x, bob4.position.y, 30);

	push();
	strokeWeight(5);
	stroke(255);
	line(con.pointA.x, con.pointA.y, bob.position.x, bob.position.y);
	line(con2.pointA.x, roof.position.y, bob2.position.x, bob2.position.y);
	line(con3.pointA.x, roof.position.y, bob3.position.x, bob3.position.y);
	line(con4.pointA.x, roof.position.y, bob4.position.x, bob4.position.y);
	pop();
	rect(roof.position.x, roof.position.y, 230, 20);

	//call display() to show ropes here


	//create ellipse shape for multiple bobs here


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(bob, { x: 0, y: 0 }, { x: -0.08, y: 0 })


	}
}
