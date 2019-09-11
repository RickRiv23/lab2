var btn = document.querySelector(".js-submitBtn"),
    currentGuess = document.querySelector(".js-guess"),
    guesses = document.getElementById("guesses"),
    result = document.getElementById("result"),
    decision = document.getElementById("decision"),
    feedback = document.getElementById("feedback");
    
var attempts = 0;
    
const randNumber = Math.floor(Math.random() * 99) + 1;
console.log(randNumber);

function checkGuess(attempts){
    let tempGuess = currentGuess.value;
    if(attempts != 7){
        if (tempGuess == randNumber) {
            result.style.display = "block";
            decision.innerHTML = "You Win!"
            result.textContent += randNumber;
            btn.disabled = "true";
        }
        guesses.textContent += tempGuess + " ";
        checkNumber(tempGuess);
    }
    else if (attempts == 7){
        result.style.display = "block";
        decision.innerHTML = "Game Over!"
        result.textContent += randNumber;
        guesses.textContent += tempGuess + " ";
        btn.disabled = "true";
    }
    
}
function checkNumber(guess){
    if(guess > randNumber){
        feedback.textContent = "Too high";
    }
    else if(guess < randNumber){
        feedback.textContent = "Too low";
    }
}

btn.addEventListener("click", function(){
    attempts++;
    console.log(attempts);
    checkGuess(attempts);
});