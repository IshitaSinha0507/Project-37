var gameState = 0;
var database;
var contestantCount,contestant;
var quiz,question;
var allContestants;

function setup(){
  canvas = createCanvas(950,400);
  
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");  
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    //clear();
    quiz.play();
  }
 
}
