let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoint = document.querySelector("#user-score");
const compPoint = document.querySelector("#comp-score");

const genChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return option[idx];
};
const draw = () => {
    msg.innerText = "It was a draw🤝";
    msg.style.backgroundColor = "#F5F5DC";
};

const showWin = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userPoint.innerText = userScore;
        msg.innerText = "You Win🏆";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compPoint.innerText = compScore;
        msg.innerText = "You Loss😥";
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    const compChoice = genChoice();
    if (userChoice === compChoice) {
        draw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice = "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});