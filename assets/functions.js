// I declare some variables with objects and some as text to either be accessed via JQuery or Vanilla

var btn = document.querySelector(".js-submitBtn"),
    currentGuess = document.querySelector(".js-guess"),
    guesses = document.getElementById("guesses"),
    decision = document.getElementById("decision");
    
const RESULT_SELECTOR = "#result";
const FEEDBACK_SELECTOR = "#feedback";
    
var attempts = 0;
var wins = 0;
var losses = 0;
    
var randNumber = Math.floor(Math.random() * 99) + 1;
console.log(randNumber);


// Functions are broken out for modularity purposes
function checkGuess(attempts){
    let tempGuess = currentGuess.value;
    
    if( checkNumber(tempGuess) ){       //  Check if guess is valid
        if( $("#tries").text() > 0 ){
            if (tempGuess == randNumber) {
                $(RESULT_SELECTOR).show();                  //  JQuery
                $(FEEDBACK_SELECTOR).text("");              //  JQuery
                decision.innerHTML = "You Win!";
                result.classList.add("correct");
                $("#number").text(randNumber);
                btn.disabled = "true";
                wins++;                                     //  Update wins
            }
            guesses.textContent += tempGuess + " ";
            checkLowHigh(tempGuess);
        }
        else{
            $(RESULT_SELECTOR).show();                      //  JQuery
            decision.innerHTML = "Game Over!";
            result.classList.add("incorrect");
            $("#number").text(randNumber);
            guesses.textContent += tempGuess + " ";
            btn.disabled = "true";
            losses++;                                       //  Update losses
        }
        
        updateScoreboard();                                 //  Update scoreboard
    }
    else
        $(FEEDBACK_SELECTOR).text("Invalid guess, please input a number between 1 and 99.");        //  JQuery
    
}
function checkNumber(guess){
    if( (guess > 0) && (guess < 100) ){
        attempts++;
        $("#tries").html(7 - attempts);                 //  JQuery
        return true;
    }
    else
        return false;
    
}
function checkLowHigh(guess){
    if(guess > randNumber){
        $(FEEDBACK_SELECTOR).text("Too high");          //  JQuery
    }
    else if(guess < randNumber){
        $(FEEDBACK_SELECTOR).text("Too low");           //  JQuery
    }
}
function updateScoreboard(){
    $("#wins").text(wins);
    $("#losses").text(losses);
}

function reset() {                                      //  Using some JQuery methods/functions
    $(".js-guess").val("");
    $("#tries").text("7");
    $("#feedback").text("");
    $("#result").hide();
    guesses.innerHTML = "";
    result.classList = "";
    decision.innerHTML = "";
    $("#number").text("");
    btn.disabled = false;
    attempts = 0;
    
    // After resetting everything, get new random number
    randNumber = Math.floor(Math.random() * 99) + 1;
    console.log(randNumber + " " + attempts);
}


// Event listeners
btn.addEventListener("click", function(){
    console.log(attempts);
    checkGuess(attempts);                               //  Here's the magic
});

$(".js-resetBtn").on("click", function(){               //  JQuery
    reset();
});