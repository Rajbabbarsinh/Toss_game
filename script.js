let btns = document.querySelectorAll('button')
let output = document.querySelector('.output')
let winner = document.querySelector('.winner')

for(let t of btns){
    t.addEventListener("click", ()=>performanceToss(t.innerText.trim()))
}

let userScore = 0 
let computerScore = 0

function performanceToss(clickedButtonText){
    let userToss = clickedButtonText
    let tossArr = ["Head" , "Tail"]
    let randomIndex = parseInt(Math.random() * tossArr.length)
    let randomToss = tossArr[randomIndex]

    if(userToss === randomToss){
        userScore++
        winner.innerHTML = `User Won as he selected ${userToss} !!!`
    }
    else{
        computerScore++
        winner.innerHTML = `Computer Won as he selected ${userToss} !!!`
    }

    output.innerHTML = `<p> UserScore: ${userScore} <br /> <br />ComputerScore: ${computerScore}</p>`
}
 