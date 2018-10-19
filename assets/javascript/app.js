$(document).ready(function ()  {


    //creat variables
    var choices = {
    
       question1: ["David Tennant","Matt Smith", "Arthur Darvill","Christopher Eccelston"],
       
       question2: ["0","4","6", "1"],

       question3: ["Daleks","Zygons", "Cybermen", "Ood"],

        question4: ["True", "False"],

        question5: ["Sally Sparrow","Martha Jones", "Kate Stewart", "Sarah Jane Smith"],

        qustion6: ["Amy Pond", "Rose Tyler", "Clara Oswald", "Sarah Jane Smith"],

        question7: ["True", "False"],

        question8: ["Harold Saxon", "Craig Owens","Kate Stewart","Jenny Jones"],

        qustion9: ["Cybermen","Daleks","Weeping Angels", "The Greater Intelligence"],

        question10:["True", "False"]
    }
    
    
    var userInput
    var correctAnswer = 0;
    var incorrect = 0;
    var unanswered = 0;
    var questionIndex = 0;
    var clockRunning = false;
console.log(questions)
    //Click function
    $(".answer").on("click", function () {
        //if correct answer is chosen add 1 to correct answers
console.log(question1.length)
        function userChoice() {
            for (let i = 0; i < question1.length; i++) {
           
                    if (questions.question[i] == "correct" && radio.checked) {
                        console.log(questions)
                        correctAnswer++;
                    
                    }
              

        userChoice()


        //if no answer is chosen and timer runs out add 1 to missed answers
    }
}
    })
})
    //create timer
    //   function timeConverter(t) {

    //     var minutes = Math.floor(t / 60);
    //      var seconds = t - (minutes * 60);
    //     
    //        if (seconds < 10) {
    //             seconds = "0" + seconds;
    //            console.log(seconds)
    //  }
    //  }
    //   if (minutes === 0) {
    //     minutes = "00";
    //   }
    //   else if (minutes < 10) {
    //     minutes = "0" + minutes;
    //   }

    //   return minutes + ":" + seconds;
    // }

    //display timer
    //timeConverter()
