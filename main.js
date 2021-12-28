let randomNumber = Math.floor(Math.random() * 20 + 1)
let playerBet = document.querySelector("#playerMoney")
let wrongGuess = 100
let isNoMoney = false


document.querySelector("#button").onclick = function() {
    let guessNumber = document.querySelector("#guessNumber").value
    
    if(guessNumber === ''){
        alert(" Guess number can not be empty")
    }

    if(guessNumber == randomNumber) {
        alert("Correct")
    }else if(guessNumber > randomNumber){
        alert("Try lower number")
        playerBet.textContent = "Player Money: $" + money
    }else{
        alert("Try higher number")
        playerBet.textContent = "Player Money: $" + money
    }

}

function playerName(){

    let customerName = prompt("Please enter your name: " );

    if (customerName!= null) {
    
        document.getElementById("welcome").textContent = "Player Name: " + customerName
    
    }
    
}

function userBet(){
    let customerBet = prompt(" Please enter your bet: ");
    if(customerBet != null){
        document.getElementById("pMoney").textContent = "Player Money:$ " + customerBet
    }
}



function rules(){
    alert(" Each Wrong Guess is equal to 10USD$ Deduction to your bet. ")
    alert(" If you win you will receive Triple pay ")
}




