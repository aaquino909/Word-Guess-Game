
    // JAVASCRIPT    

    //declare and initialize variables
    var win = 0;
    var lose = 0;
    var guessesLeft = 9; //total of guesses a user can have
    var list = ["orange", "apple", "pineapple", "peach", "strawberry", "pear", "grape", "avocado","mango","blueberry", "cherry"]; 
    var guessedLetters = []; //array push user's guesses
    
    
    var randomIndex = Math.floor(Math.random()*11);
    var chosenWord = list[randomIndex]; //random index inside list assigned to chosenWord
    var wordLength = chosenWord.length; // amount of letters in word
    console.log(chosenWord);
    console.log(wordLength);
    var underscore= []; //empty string for underscore
    
    
    //STEP TWO: use a for loop to display amount of underscores using wordLength;
    function start(){ //function to start forloop and display underscore
    for (var i = 0; i < wordLength; i++ ){
        underscore[i]= "_ "; //keeps adding underscore to the amount of letters fruit
    }
    document.getElementById("underscore").innerHTML= underscore.join("") ;
    }
    start(); //starts function
    
    function winner(){
        if (underscore.join("") === chosenWord){
            document.getElementById("win").innerHTML= win;
            alert("You're a winner Baby! the word was " + chosenWord);
            location.reload();
            win++
                }
    }


    //Function to match users guessed letter to each index of array
    function matchWithUsers() {
        var letterPosition = chosenWord.split(""); //turns chosenWord into an array and puts into letterPosition
        var userGuess = event.key; //"a" goes into user guess

    for (var i = 0; i <  letterPosition.length; i++){ //for as long as the array
        if (letterPosition[i] === userGuess){  // if index i is equal to the userguess
            // then put userguess letter and replace it with matching underscore array 
            underscore[i] = userGuess; //puts userGuess letter in the array Index of underscore if it matches
            document.getElementById("underscore").innerHTML= underscore.join("") ; 
            }
        else {
        }
        }
    return;
    }
   
   
    //start gave over if it reaches x amount of guesses
    function reset(){
        if (guessesLeft < 1){
            lose++;
            guessesLeft = 9;
            guessedLetters = [];

            document.getElementById("lose").innerHTML= lose ;
            document.getElementById("guessesLeft").innerHTML= guessesLeft ;
            document.getElementById("guessedLetters").innerHTML= guessedLetters ;
            document.getElementById("underscore").innerHTML= underscore ;

        }
    }
    
    document.onkeyup = function(event) { //function to execute for each key Press
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        guessedLetters.push(userGuess); //adds ever letter pushed to guessedLetters array
        document.getElementById("guessedLetters").innerHTML= guessedLetters
        matchWithUsers();
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML= guessesLeft; 
        if (guessesLeft === 0) {
            alert("Game Over!");
            location.reload();
        }
        winner();
        reset();

        
    }
