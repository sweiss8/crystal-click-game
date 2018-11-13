
//Create Global Variables
    //wins, losses, goalNumber, userScore, array of image sources (could also include this in function1)

    var userScore = 0;
//Function Definitions
    //Function 1:
        // Set goalNumber with Math.random function to create a random number.
        //Loop through images array. For every index, create image on screen. 
        //add class
        //add src
        //add crystal value as attribute
        //append images to screen.
$(document).ready(function() {


    function makeDivs() {
        var goalNumber = Math.floor((Math.random() * 102) + 19);
        var crystalImages = ["https://ae01.alicdn.com/kf/HTB1qMDtdGQoBKNjSZJnq6yw9VXaS/145g-natural-red-quartz-cluster-beautiful-red-aura-angel-crystal-cluster-reiki-Titanium-coating-cluster-healing.jpg_640x640.jpg", "https://www.zerotoys.com/v/vspfiles/photos/MAGICALCRYSTALS-3.jpg", "http://www.sciencetoystore.com/contents/media/l_crystal_yellow_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71GADww3MwL._SX425_.jpg"];
        for (var i = 0; i < crystalImages.length; i++) {
            var img = $("<img>");
            img.attr("src", crystalImages[i]);
            img.addClass('crystal');
            img.attr('crystalVal', Math.floor(Math.random() * 11) + 2);
            img.attr('id', i);
            $('.divContainer').append(img);
            $("#goalNumber").text(goalNumber);
        }

    }

    makeDivs();

// create click event on crystals
$(".crystal").on("click", function(){
    var crystalVal = ($(this).attr("crystalVal"));
    crystalVal = parseInt(crystalVal);
    userScore += crystalVal;
    console.log(crystalVal);
    console.log(userScore);
    $("#currentScore").text(userScore);

});

$(".crystal").on("click", function(){
    console.log(this);

});





// use $(this) to capture value attribute
// Add clicked value to user score
// create conditions to check for win or loss using if statement


});
