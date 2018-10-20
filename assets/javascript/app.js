$(document).ready(function () {


    //creat variables
    var correctAnswer = 0;
    var incorrect = 0;
    var unanswered = 10;
    var clockRunning = false;

    //Click function
    $("input").on("click", function () {
        //if correct answer is chosen add 1 to correct answers
        unanswered--;
        if ($(this)[0].value === "true") {
            correctAnswer++;
            console.log(correctAnswer)
        }

        else {
            incorrect++;
            console.log(incorrect)
        }

        //if no answer is chosen and timer runs out add 1 to missed answers
    })

   
    
    //create timer
    var timer = {
        time : 300,

        start: function () {
            if (!clockRunning) {
                setInterval(timer.count, 1000)
                clockRunning = true;
            }
        },

        count: function () {
            timer.time--;
            var currentTime = timer.timeConverter(timer.time);
            $("#timerDisplay").text(currentTime)

        },

        timeConverter: function(t) {

            //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
        
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
        
            if (minutes === 0) {
              minutes = "00";
            }
        
            else if (minutes < 10) {
              minutes = "0" + minutes;
            }
        
            return minutes + ":" + seconds;
          }

        
    }
       
    $("#start").click(timer.start);

    function endGame(){
        $("#questions").empty()
        $("#correctA").text("Correct Answers: " + correctAnswer)
        $("#wrongA").text("Inorrect Answers: " + incorrect)
        $("#missedA").text("Missed Answers: " + unanswered)
    }
    //end game
    if (timer === 0){
        endGame()
    }
    $("#submit").on("click", function() {
     endGame()
    })


     })
