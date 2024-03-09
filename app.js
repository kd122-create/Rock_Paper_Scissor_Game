let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

function genCompChoice() {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = () =>{
    msg.innerText = "GAME WAS DRAW. PLay AGAIN";
    msg.style.backgroundColor = "#081b31";
}
const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    console.log(`Computer choice ${compChoice}`); 
    if(userChoice === compChoice){
        console.log(`Game draw`);
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

    showWinner(userChoice,compChoice,userWin);
    }

}


const showWinner = (userChoice,compChoice,userWin) =>{
    if(userWin){
        userScore ++ ;
        userScorePara.innerText = userScore;
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        console.log("User win");
    }
    else{
            compScore ++ ;
            compScorePara.innerText = compScore;
            msg.innerText= `You Lose! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
            console.log("User Lose");
        }
}



choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log(`choice was clicked ${userChoice}`)
        playGame(userChoice);
    })
})
