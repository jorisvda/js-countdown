
const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");

let player;
let computer;
let result;

const possibleChoices = document.querySelectorAll(`button`);

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();

}));

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    console.log(randomNumber);

    
if (randomNumber == 1) {
    computer = "rock";
} if (randomNumber == 2) {
    computer = "paper";
} if (randomNumber == 3) {
    computer = "scissors";
}

    computerChoice.innerHTML = computer;

    getResult

}




    