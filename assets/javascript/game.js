
//Create Global Variables
    //wins, losses, goalNumber, userScore, array of image sources (could also include this in function1)

//Function Definitions
    //Function 1:
        // Set goalNumber with Math.random function to create a random number.
        //Loop through images array. For every index, create image on screen. 
        //add class
        //add src
        //add crystal value as attribute
        //append images to screen.
$(document).ready(function() {

    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var goalNumber = 0;
    var crystalVal = "";
    var easyDif = true;
    var medDif = false;
    var hardDif = false;


    // Create 'easy" medium, and hard difficulty variables with boolean values CHECK
    // If/else statement that changes the boolean values of the three EMD variables so that one is true, the other two are false.

    //timer
    //create button timer for 30 seconds
    //cancel button timer if userScore === goalNumber
    //lose, reset if timer = 0


    $("#easyButton").on("click", function(){
        easyDif = true;
        medDif = false;
        hardDif = false;
        $("#easyButton").addClass("selected");
        $("#medButton").removeClass("selected");
        $("#hardButton").removeClass("selected");

    });

    $("#medButton").on("click", function(){
        easyDif = false;
        medDif = true;
        hardDif = false;
        $("#easyButton").removeClass("selected");
        $("#medButton").addClass("selected");
        $("#hardButton").removeClass("selected");

    });

    $("#hardButton").on("click", function(){
        easyDif = false;
        medDif = false;
        hardDif = true;
        $("#easyButton").removeClass("selected");
        $("#medButton").removeClass("selected");
        $("#hardButton").addClass("selected");

    });

    $(".startButton").on("click", function(){
        makeDivs();

    });



// selectDifficulty();
    // Create e/m/d buttons
    // incorporate if/else statement for the goalNumber selection that corresponds to the difficulty level.

    // Create "Start" button
    //onclick functions for buttons.
    // Start button runs the "makeDivs" function
    //

    function makeDivs() {
        $(".divContainer").html("");
        userScore = 0;
        if(easyDif === true) {
            goalNumber = Math.floor((Math.random() * 50) + 100);
        } else if(medDif === true) {
            goalNumber = Math.floor((Math.random() * 50) + 52);
        } else if(hardDif === true) {
            goalNumber = Math.floor((Math.random() * 25) + 19);
        };
        var crystalImages = ["https://ae01.alicdn.com/kf/HTB1qMDtdGQoBKNjSZJnq6yw9VXaS/145g-natural-red-quartz-cluster-beautiful-red-aura-angel-crystal-cluster-reiki-Titanium-coating-cluster-healing.jpg_640x640.jpg", "https://www.zerotoys.com/v/vspfiles/photos/MAGICALCRYSTALS-3.jpg", "http://www.sciencetoystore.com/contents/media/l_crystal_yellow_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71GADww3MwL._SX425_.jpg"];
        for (var i = 0; i < crystalImages.length; i++) {
            var img = $("<img>");
            img.attr("src", crystalImages[i]);
            img.addClass('crystal');
            img.attr('crystalVal', Math.floor(Math.random() * 11) + 2);
            img.attr('id', i);
            $('.divContainer').append(img);
            $("#goalNumber").text(goalNumber);
            $("#currentScore").text(userScore);
            
        }
        checkGuess();

    }


    function checkGuess() {
        $(".crystal").on("click", function(){
            crystalVal = ($(this).attr("crystalVal"));
            crystalVal = parseInt(crystalVal);
            userScore += crystalVal;
            $("#currentScore").text(userScore);
            checkWin();
        });
    }
    

    function checkWin() {
        if(userScore == goalNumber) {
            alert("You win!"); //alerts the win
            wins++; // adds to the wins column
            $("#wins").text(wins);
            makeDivs(); // restarts the game
        } else if (userScore > goalNumber) {
            alert("You lose!"); //alerts the loss
            losses++; // adds to the loss column
            $("#losses").text(losses);
            makeDivs(); // restarts the game
            console.log(userScore);
            
        }
    }

});
