let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
};

const compareGuesses = (human, computer, secret) => {
    if (Math.abs(human - secret) < Math.abs(computer - secret)) {
        return true;
    }
    if (Math.abs(human - secret) === Math.abs(computer - secret)) {
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    if (winner === "human") {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};