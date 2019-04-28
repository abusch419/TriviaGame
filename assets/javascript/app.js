
        $(document).ready(function () {

          // define my questions object 
          var myQuestions = [
              {
                  question: "Freedom's just another word for nothing left to do",
                  answers: {
                      a: "Me and Bobby Mcgee",
                      b: "Sugaree",
                      c: "Crazy Fingers",
                      d: "Sugar Magnolia"
                  },
                  correctAnswer: "a"
              },
              {
                  question: "Who can stop what must arrive now?",
                  answers: {
                      a: "Sugaree",
                      b: "Terrapin Station",
                      c: "Crazy Fingers",
                      d: "Sage and Spirit"
                  },
                  correctAnswer: "c"
              },
              {
                  question: "More than this I will not ask, faced with mysteries deep and vast",
                  answers: {
                      a: "Dar Star",
                      b: "The Other One",
                      c: "Terrapin Station",
                      d: "High Time"
                  },
                  correctAnswer: "c"
              }
          ];

          // define global variables to be incremented and decremented 

          // game operation variables

          var number = 6;
          var intervalId;
          var i = 0;


          // score keeper variables
          var unanswered = 0;
          var correctAnswerCount = 0;
          var incorrectAnswerCount = 0;








          // start game button click handler
          $("#start-button").on("click", function () {

              run();
              $("#start-button").hide();

          })

          // TIMETELLER FUNCTIONS

          function run() {



              console.log("Running! I = " + i)


              clearInterval(intervalId);
              intervalId = setInterval(decrement, 1000);

              if (i === myQuestions.length) {
                  $("#questions-answers").empty();
                  endGame();


              }
              if (i < myQuestions.length) {

                  displayQuestionAndAnswers(i);





              }


          }

          function decrement() {

              number--;




              if (number < 0) {

                  stop();
                  i++;
                  unanswered++;



                  run();

              }

              $("#time").text(number);

          };

          // create a function to stop the timer and set it to zero 
          function stop() {
              console.log("stop!")
              clearInterval(intervalId);

              number = 6;
              


              // run();

          }



          // create a function to display question and answer buttons to DOM 
          function displayQuestionAndAnswers(qId) {

              console.log(i);




            // debugger;

              $("#answers").empty();
              $("#questions").empty();
              // $("#start-button").empty();
              // MUST CREATE EMPTY DIV FOR NEW Q DISPLAY - NOT START BUTTON 
              let questionDisplay = $("#question").html(`<h4>${myQuestions[qId].question}</h4>`);
              let answerOne = $(`<button>${myQuestions[qId].answers.a}</button>`).addClass("answer-button col-12").attr("data-name", "a");
              let answerTwo = $(`<button>${myQuestions[qId].answers.b}</button>`).addClass("answer-button col-12").attr("data-name", "b");
              let answerThree = $(`<button>${myQuestions[qId].answers.c}</button>`).addClass("answer-button col-12").attr("data-name", "c");
              let answerFour = $(`<button>${myQuestions[qId].answers.d}</button>`).addClass("answer-button col-12").attr("data-name", "d");
              $("#answers").append(answerOne, answerTwo, answerThree, answerFour)





          }
          

          $(document).on("click", ".answer-button", function () {





              if ($(this).attr("data-name") === myQuestions[i].correctAnswer) {

                  correctAnswerCount++;



                  number = 6;

                  console.log(myQuestions[i])
                  stop();
                  i++;
                  run();


              }
              else if ($(this).attr("data-name") !== myQuestions[i].correctAnswer) {

                  incorrectAnswerCount++;



                  number = 6;

                  console.log(i)

                  stop();
                  i++;
                  run();
              }







          })









          function endGame() {
              console.log("endgame");

              clearInterval(intervalId);


              number = 5;
              i = 0;


              $("#start-button").hide();
              $("#answers").hide();
              $("#question").hide();
              $("#correct-answer-message").html("<h3>Game Over!</h3>")
              $("#correct-answer-message").append(`<p>Incorrect Answers: ${incorrectAnswerCount}</p>`)
              $("#correct-answer-message").append(`<p>Correct Answers: ${correctAnswerCount}</p>`)
              $("#correct-answer-message").append(`<p>Unanswered Questions: ${unanswered}</p>`)
              $("#correct-answer-message").append("<button>Play Again?</button>").addClass("play-again")


              // click listener to restart the game 
              $(".play-again").on("click", function () {
                  $("#correct-answer-message").empty();
                  $("#answers").show();
                  $("#question").show();
                  i = 0;
                  correctAnswerCount = 0;
                  incorrectAnswerCount = 0;
                  unanswered = 0;
                  number = 6;

                  run();


              })



          }







          // end of document.ready function //

      })