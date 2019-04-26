var number = 15

var intervalId;

function run () {
  clearInterval(intervalId);
  setInterval(decrement, 1000);
}

function decrement () {
  number--;
  $("#display-number").html(`<h2>${number}</h2>`);

  if (number === 0) {
    // display new question and answers to the screen
  }
  
}











// game logic in this file 

// first we need to define an object with questions and answers in it 



// homework pseudo-coding 

// where do we need to start?
// a start button sits on the screen , if we press it the game begins
$("start-button").on("click", function() {
    // the game needs to begin here
})




// GAME BEGINS FUNCTION to show a question, answers, and a countdown timer on the screen we use this function 


setTimeout(displayQuestionAndAnswers, 10000);

function displayQuestionAndAnswers() {

  $("#question-display").text("Question from questions Object");
  $("#answer-button-one").text("Answer1 from questions Object");
  $("#answer-button-two").text("Answer2 from questions Object");
  $("#answer-button-three").text("Answer3 from questions Object");
  $("#answer-button-four").text("Answer4 from questions Object");

//   increase number of questions asked so them game knows when it is done 
  questionsAsked++;     //we need to globally define this!//

  console.log("Question Asked!");


// if questionsAsked = 3
// 	kick us to the ending screen

if (questionsAsked = 3) {
    // go to the end screen 
}



// if the time runs down:
// 	 unanswered++
// 	questionsAsked++
// 	move to the next question and start a new 10 sec timer 

else if  (**time runs out**) {
unanswered++;
questionsAsked++;
displayQuestionAndAnswers();
}


		
// if the user chooses correctly:
// 	correctAnswers++
// 	questionsAsked++
// 	move to the next question and begin a new 10 sec timer 
else if  (**userGuess = correct answer**) {
correctAnswers++;
questionsAsked++;
displayQuestionAndAnswers();
}



// if the user chooses incorrectly: 
// 	incorrectAnswers++
// 	questionsAsked++
// 	move to the next question and begin a new 10 sec timer
else if (**userGuess === incorrect answer**) {\
incorrectAnswers++;
questionsAsked++;
displayQuestionAndAnswers();
}


}  // end of displayQAs function (we need all the win loose logic in this funtion)







// where do we need to end?
// display “All Done - Here’s How You Did!”
// correct answers = num
// incorrect answers = num
// unanswered questions = num
// Start Over Button starts the game over if you click it 



