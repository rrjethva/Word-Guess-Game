var words = ["drogon", "nightking", "aryastark", "hodor", "tyrion", "jonsnow", "cersei"]

var randomWord = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;



function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
        console.log(blanksAndCorrect);
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");
}



function img() {

    if (randomWord === words[0]) {
        document.getElementById("image").src = "assets/images/drogon.jpg";
    }

    else if (randomWord === words[1]) {
        document.getElementById("image").src = "assets/images/nightking.jpg";
    }

    else if (randomWord === words[2]) {
        document.getElementById("image").src = "assets/images/arya.jpg";
    }

    else if (randomWord === words[3]) {
        document.getElementById("image").src = "assets/images/hodor.jpg";
    }

    else if (randomWord === words[4]) {
        document.getElementById("image").src = "assets/images/tyrion.jpg";
    }

    else if (randomWord === words[5]) {
        document.getElementById("image").src = "assets/images/jonsnow.jpg";
    }

    else if (randomWord === words[6]) {
        document.getElementById("image").src = "assets/images/cersei.jpg";
    }
};

//RESET FUNCTION

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}


function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {

        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] === letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }

    else (randomWord[i] !==letter); {
        wrongGuess.push(letter);
        guessesRemaining--;

        //create code to store wrong guesses and check true or false and if false, place in wrong, if true don't repeat
    }

}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)


    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        img();
        reset();
        document.getElementById("winstracker").innerHTML = " " + wins;
    }
    else if (guessesRemaining === 0) {
        losses++;
        reset();
        document.getElementById("image").src = "assets/images/youlose.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    1
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(guesses);

    complete();

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}

