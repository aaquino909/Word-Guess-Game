
    // JAVASCRIPT    

    //declare and initialize variables
    var win = 0;
    var lose = 0;
    var guessesLeft = 15; //total of guesses a user can have
    var list = ["orange", "apple", "pineapple", "peach", "strawberry", "pear", "grape", "avocado","mango","blueberry", "cherry"]; 
    var guessedLetters = []; //array push user's guesses
    
    
    var randomIndex = Math.floor(Math.random()*11);
    var chosenWord = list[randomIndex]; //random index inside list assigned to chosenWord
    var wordLength = chosenWord.length; // amount of letters in word
    // console.log(chosenWord);
    // console.log(wordLength);
    var underscore= []; //empty string for underscore
    
    
    //STEP TWO: use a for loop to display amount of underscores using wordLength;
    function start(){ //function to start forloop and display underscore
    for (var i = 0; i < wordLength; i++ ){
        underscore[i]= "_ "; //keeps adding underscore to the amount of letters fruit
    }
    document.getElementById("underscore").innerHTML= underscore.join("") ;
    }
    start(); //starts function
    


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
        }
    return;
    }
   

    
    document.onkeyup = function(event) { //function to execute for each key Press
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        guessedLetters.push(userGuess); //adds ever letter pushed to guessedLetters array
        document.getElementById("guessedLetters").innerHTML= guessedLetters.join("  "); 
        matchWithUsers();
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML= guessesLeft; 
        if (guessesLeft === 0) {
            alert("Game Over! The word was " + chosenWord.toUpperCase());
            lose++;
            guessesLeft = 15;
            guessedLetters = [];
            document.getElementById("lose").innerHTML = lose;
            document.getElementById("guessedLetters").innerHTML = guessedLetters.join("  ");
            document.getElementById("guessesLeft").innerHTML = guessesLeft;

            
        }
        if (underscore.join("") === chosenWord){
            alert("You're a winner Baby! The word was " + chosenWord.toUpperCase());
            win++;
            guessesLeft = 15;
            guessedLetters = [];
            underscore = [];
            console.log("underscore" + underscore);
            console.log("guessedLetters" +guessedLetters);
            console.log("chosenWord" + chosenWord);
            var newWord= list[Math.floor(Math.random()*list.length)];
            underscore = [];
            for (var i = 0; i < newWord.length; i++ ){
                underscore[i]= "_ "; //keeps adding underscore to the amount of letters fruit
            }
            console.log("NEWWORD" + newWord);
            document.getElementById("underscore").innerHTML= underscore.join("") ;
            document.getElementById("win").innerHTML= win;
            document.getElementById("guessedLetters").innerHTML = guessedLetters.join("  ");
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
        }
        
    }

