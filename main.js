let randomNumber = Math.floor(Math.random() * 20 + 1)
let wrongGuess = 100
let customerName
let customerBet
let noMoney = "You Dont Have enough money to play ..."

document.querySelector("#button").onclick = function() {
    let guessNumber = document.querySelector("#guessNumber").value


    checkNumber(guessNumber)

    
    if(guessNumber === '' ){
        alert(" Guess number can not be empty")
        location.reload();

    }

    if(customerBet <= 0){
        alert(" Customer Bet can not be empty .! ")
        location.reload();
    }


    if(guessNumber == randomNumber) {
        alert("Correct")
        customerBet *= 3
        document.getElementById("pMoney").textContent = "Player Money:$ " + customerBet
    }
    
    else if(guessNumber > randomNumber){
        alert("Try lower number")
        customerBet -= wrongGuess
        if(customerBet <= 0){
        document.getElementById("pMoney").textContent = "Player Money:$ " + noMoney
        alert("You can not Play anymore, You ran out of money")
        location.reload();
        }
        document.getElementById("pMoney").textContent = "Player Money:$ " + customerBet
    }
    
    else{
        alert("Try higher number")
        customerBet -= wrongGuess
        if(customerBet <= 0){
            document.getElementById("pMoney").textContent = "Player Money:$ " + noMoney
            alert("You can not Play anymore, You ran out of money")
            location.reload();
            }
        document.getElementById("pMoney").textContent = "Player Money:$ " + customerBet
    }

}

function playerName(){

    customerName = window.prompt("Please enter your name: " );
    checkName(customerName)
    if (customerName != null) {
        document.getElementById("welcome").textContent = "Player Name: " + customerName
    }
    
}

function userBet(){
    customerBet = prompt(" Please enter your bet: ");
    checkMoney(customerBet)
    checkBet(customerBet)
    if(customerBet != null){
        
        document.getElementById("pMoney").textContent = "Player Money:$ " + customerBet
    }
}



function rules(){
    alert(" Each Wrong Guess is equal to 100USD$ Deduction to your bet. ")
    alert(" If you win you will receive Triple pay ")
}



function checkName(playerName){
    if (!/^[a-zA-Z]+$/.test(playerName) || !playerName) {
        alert("Your Name is not Valid! It is not a String MaderPaker ! ")
        location.reload();
      }else{
          alert(" Your Name is Valid, you can now Play " + playerName )
      }
}


function checkBet(playerBet){
    if (/^[a-zA-Z]+$/.test(playerBet) || !playerBet) {
        alert(" Your Bet is invalid, It is Suspicios to bet a 'WORD' ")
        location.reload();
     
      }else{
    
          alert(" Bet successfully .. Total Bet: $"+playerBet)
      }
}


function checkNumber(playerGuess){
    if (/^[a-zA-Z]+$/.test(playerGuess) || !playerGuess) {
        alert(" Your Guess is invalid, It is Suspicios to Guess a 'WORD' ")
        Window.stop()
     
    }
}



function checkMoney(userMoney){
    if(userMoney <= 100){
        alert(" Player Bet is lower than expected 100USD ..")
        alert(" Comeback again if you have enough Money in your packet .. ")
        Window.stop()
    }else{
        alert(" Bet successfully .. ")
    }
}
