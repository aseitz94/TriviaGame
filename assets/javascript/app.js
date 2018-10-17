$(document).ready(function () {


    //creat variables
    var userInput
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var questionIndex = 0;

    //Click function
    $(".answer").on("click", function () {
        //if correct answer is chosen add 1 to correct answers
    
        function inputChoice() {
            for (let i = 1; i <= 10; i++) {
                var radios = document.getElementsByName("inlineRadioOptions" + i);
                    for (let j = 0; j < radios.length; j++) {
                     var radio = radios[j];
                        if (radio.value == "correct" && radio.checked) {
                            correct++;
                            console.log(correct)
                    }
                        else{
                            incorrect++;
                            console.log(incorrect)
                        }
                }
            }
        }

        inputChoice()
        //if wrong answer is chosen add 1 to incorrect answers

        //if no answer is chosen and timer runs out add 1 to missed answers
    })
    //create timer

    //display timer

})