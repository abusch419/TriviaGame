
$(document).ready(function () {

  // define my questions object 
  var myQuestions = [
    {
      question: "Mama come quick with the water witch spell Cool clear water where you can't never tell",
      answers: {
        a: "Greatest Story Ever Told",
        b: "Sugaree",
        c: "Crazy Fingers",
        d: "Sugar Magnolia"
      },
      correctAnswer: "a"
    },
    {
      question: "Going where the wind don't blow so strange Maybe off on some high cold mountain range",
      answers: {
        a: "Sugaree",
        b: "Terrapin Station",
        c: "I Know You Rider",
        d: "He's Gone"
      },
      correctAnswer: "d"
    },
    {
      question: "Don't you touch hard liquor, just a cup of cold coffee",
      answers: {
        a: "Dark Star",
        b: "The Other One",
        c: "Loser",
        d: "High Time"
      },
      correctAnswer: "c"
    },
    {
      question: "Seems like I've been here before; fuzzy then and still so obscure",
      answers: {
        a: "Lazy River Road",
        b: "Truckin",
        c: "Bertha",
        d: "Born Cross-Eyed"
      },
      correctAnswer: "d"
    },
    {
      question: "There's a tingling recognition like the sound of distant thunder",
      answers: {
        a: "Just A Little Light",
        b: "Victim Or The Crime",
        c: "Lost Sailor",
        d: "Althea"
      },
      correctAnswer: "a"
    },
    {
      question: "One pane of glass in the window No one is complaining, though, come in and shut the door",
      answers: {
        a: "Touch Of Grey",
        b: "Hell In A Bucket",
        c: "Candyman",
        d: "It Must Have Been The Roses"
      },
      correctAnswer: "d"
    },
    {
      question: "Once we grew into our shoes, we told them where to go",
      answers: {
        a: "Althea",
        b: "Dire Wolf",
        c: "Days Between",
        d: "Foolish Heart"
      },
      correctAnswer: "c"
    },
    {
      question: "Lost is a long & lonely time Fairy Sybil flying",
      answers: {
        a: "Mountains Of The Moon",
        b: "Black Throated Wind",
        c: "Fire On The Mountain",
        d: "Built To Last"
      },
      correctAnswer: "a"
    }
  ];

  // define global variables to be incremented and decremented 

  // game operation variables

  var number = 15;
  var intervalId;
  var i = 0;


  // score keeper variables
  var unanswered = 0;
  var correctAnswerCount = 0;
  var incorrectAnswerCount = 0;
  var audio = new Audio("assets/sound/day25_uenw4a2_mybrotheresau.mp3");








  // start game button click handler
  $("#start-button").on("click", function () {
    audio.play();
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

    number = 15;



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
      number = 15;

      console.log(myQuestions[i])
      stop();
      i++;


      // I could put run on a set timeout 

      run();


    }
    else if ($(this).attr("data-name") !== myQuestions[i].correctAnswer) {

      incorrectAnswerCount++;



      number = 15;

      console.log(i)

      stop();
      i++;

      // I could put run on a set timeout 

      
      run();
    }







  })









  function endGame() {
    console.log("endgame");

    clearInterval(intervalId);


    number = 15;
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
      number = 15;

      run();


    })



  }







  // end of document.ready function //

})