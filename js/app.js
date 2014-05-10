
$(document).ready(function(){
	//focus on input
    $("#userGuess").focus();
    //Clear all from old game
    //Declare variables
    var numGuesses = 0;

    //Generate random number and assign to variable
    var target = Math.floor(Math.random() * 101);
    console.log("Your random number is " + target);

    //Accept guess
    $("#guessButton").click(validateGuess);
    //make enter submit button
    /*$("#userGuess").keyup(function(event) {
        if(event.keyCode == 13){
            $("#guessButton").click();
        }
    });*/
    function validateGuess() {
        var guess = $('#userGuess').val();
        console.log("Guess is " + guess);
        // check to make sure guess is not empty
        if(!guess ||!guess.trim()) {
            alert("You forgot to enter your item");
        }
        //check to make sure guess is not NaN
        else if(isNan(+guess)) {
            alert("You must enter a number between 1 and 100");
        }
        //check to make sure guess is between 1 and 100
        else if(+guess <= 0 && +guess > 100) {
            alert("You must enter a number between 1 and 100");
        }
        //If all well, compare guess to random
        else compareGuess(+guess); //not sure this goes here
        console.log("Your guess is " + userGuess);}
    
    
    
    function compareGuess(guess) {
        var diff = guess - target;
        if (diff > 50) {
            console.log("Diff greater than 50");
        }
        else if (diff < 40) {
            console.log("Diff less than 40");
        }
        else if (diff < 25) {
            console.log("Diff less than 25");
        }
        else if (diff < 10) {
            console.log("Diff less than 10");
        }
    }
    compareGuess(guess);

    function addGuess() {
        numGuesses++;
        $('#guessList').apend("<li>" + guess + "</li>");
    }

    addGuess(guess);
    
    
        

    
        //$("#newitem").val(''); //clear new item entry box
    });
        //Check to make sure guess is between 1 and 100
        //Display message if not
    //Assign variable to guess
    //Compare guess to random number
    //Display appropriate response to guess
    //Store guess value and display -
    //Add to guess count
    //repeat accept guess step
    //when guess = random
        //display win message
        //display score
        //end game
    //If new game button clicked start at top
	/*--- Display information modal box ---
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});*/




