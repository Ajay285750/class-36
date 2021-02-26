var hypnoticBall, database;
var position;
var form;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  form=new Form()
  form.display();
}

function draw(){
  background("white");
  
   
}