var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  background("pink");
}


function draw(){
  
  // console.log(contestantCount)
  if(contestantCount >= 2){
    quiz.update(1);
  }else{
    quiz.update(0);
  }
  print(allContestants)
  // console.log(allContestants);
  if(gameState === 1){
    quiz.play();

    // clear(); 
  }
}
