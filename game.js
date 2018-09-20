$(document).ready(function(){

    $("#quiz").hide();

    let quizContainer = $("#quiz");
    let resultsContainer = $("#results");
    let submitButton = $("#submit");
    let timer = 60*5; 
    let min = 0;
    let sec = 00;


    //Question Array
    let easyQuestions = [

        {
            question: "1. What color was is Tweety Bird?",
            answers: {
                a: "Yellow", 
                b: "Black and White", 
                c: "Pink", 
                d: "Green",
            },
            correctAnswer: "a"
        },

        {
            question: "2. Which Looney Tunes Character speaks with a stutter?",
            answers: {
                a: "Bugs Bunny", 
                b: "Yosemite Sam", 
                c: "Porky Pig", 
                d: "Sylvester",
            },
            correctAnswer: "c"
        },

        {
            question: "3. Which body part always gets blown off of Daffy Duck?",
            answers: {
                a: "His head", 
                b: "His eyes", 
                c: "His finger", 
                d: "His beak",
            },
            correctAnswer: "d"
        },

        {
            question: "4. Who is Wiley Coyote always trying to catch?",
            answers: {
                a: "Bugs Bunny", 
                b: "Road Runner", 
                c: "Speedy Gonzales", 
                d: "Tweety Bird",
            },
            correctAnswer: "b"
        },

        {
            question: "5. What kind of pet does Marvin the Martian have?",
            answers: {
                a: "cat", 
                b: "R2D2", 
                c: "dog", 
                d: "pet rock",
            },
            correctAnswer: "c"
        },

        {
            question: "6. What phrase is Sylvester famous for saying?",
            answers: {
                a: "Shh.. be vewy vewy quiet!", 
                b: "Thuffering thuccotash!", 
                c: "Meep meep!", 
                d: "Eh, What's up doc?",
            },
            correctAnswer: "a"
        },

        {
            question: "7. What is the name of the company that creates Wiley Coyote's many devices?",
            answers: {
                a: "Acmax", 
                b: "Axno", 
                c: "Acme", 
                d: "Acne",
            },
            correctAnswer: "c"
        },

        {
            question: "8. What is Foghorn Leghorn's signature phrase",
            answers: {
                a: "I say, Isay", 
                b: "I do declare", 
                c: "Listen up y'all", 
                d: "All's I'm sayin",
            },
            correctAnswer: "b"
        },

        {
            question: "9. Which of these Looney Tunes characters wears pants?",
            answers: {
                a: "Porky Pig", 
                b: "Speedy Gonzales", 
                c: "Pepe le Pew", 
                d: "Bugs Bunny",
            },
            correctAnswer: "b"
        },

    ];

    $("#easy").click(function(){

        $(".instructions").hide();
        $("#quiz").show();

        startTimer()

    })

    // Countdown timer
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.text("Time Remaining: " + minutes + ":" + seconds);
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
    jQuery(function ($) {
        var fiveMinutes = 60 * 5,
            display = $('#timer');
        startTimer(fiveMinutes, display);

        clearInterval(stateTimer)
        return;
    })

    var currentquestion = 0
    var currentanswer = 0

    function showquestion(){
        $("#questions").text(easyQuestions[currentquestion].question)
        $("#btn0").text(easyQuestions[currentquestion].answers.a).attr('data-value', 'a')
        $("#btn1").text(easyQuestions[currentquestion].answers.b).attr('data-value', 'b')
        $("#btn2").text(easyQuestions[currentquestion].answers.c).attr('data-value', 'c')
        $("#btn3").text(easyQuestions[currentquestion].answers.d).attr('data-value', 'd')
    }
       
    showquestion()

       
        if(currentquestion == 10){
            $("#submit").text("Finsh")
        }
        
 

    $('.options').click(function(){
        var newvalue = $(this).data('value')
        if(newvalue === easyQuestions[currentquestion].correctAnswer){
            //do something
           
        }
        showquestion()
            alert(newvalue)
        
        currentquestion++;
    })
    
    
    
})