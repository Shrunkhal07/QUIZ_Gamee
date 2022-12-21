var readlineSync = require("readline-sync");
// import chalk from "chalk";
//const chalk = require("chalk");

//console.log(chalk.pink('Hello world'));

var score = 0;

var userName = readlineSync.question("Please tell me your name ");
console.log("Welcome to my Quiz!!", userName);

// loop

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    console.log("Correct answer!");
    score = score + 1;

  }
  else {
    console.log("Opps!....the answer is incorrect")
  }

  console.log("Your Score is: " + score);

}
//HIGHSCORE object
var highScores = [{
  name: "Shrunkhal",
  score: 10,
}];
//ARRAY + OBJECT
var quiz = [{
  question: "What is my favourite food? ",
  answer: "ramen"
}, {
  question: "Where do I live ? ",
  answer: "nagpur"
}, {
  question: "What is my favourite anime? ",
  answer: "naruto"
},
{
  question: "What is my qualification?",
  answer: "B.com"
},
{
  question: "What is my favourite movie?",
  answer: "Batman"
}


];

for (var i = 0; i < quiz.length; i++) {
  var currentQuestion = quiz[i];
  play(currentQuestion.question, currentQuestion.answer);
  console.log("----------");
}

console.log(userName + " Your Final Score is: " + score);

if (score == 0) {
  console.log("Correct Answer!!!");
  console.log("------------");

}
else {
  console.log("Better Luck next time ");
  console.log("------------");

}

for (var j = 0; j < highScores.length; j++) {
  var currentScore = highScores[j];
  console.log("Check out the high Score: " + currentScore.name + "-> " + currentScore.score);
  //console.log(currentScore.score);
}

