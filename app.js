// import functions and grab DOM elements
import { compareNumbers, generateRandomNumber } from './utils.js';

const submitButton = document.getElementById('submit-button');
const userGuess = document.getElementById('user-guess');
const results = document.getElementById('result');
const numberOfGuesses = document.getElementById('guesses');

// initialize state
let correctNumber = generateRandomNumber();
let guessesRemaining = 4;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    guessesRemaining--;
    let userInput = Number(userGuess.value);
    const answer = compareNumbers(userInput, correctNumber);
    //Evaluates answer (by calling compareNumbers function) and gives and display number of guesses remaining
    
    if (answer === 1) {
        numberOfGuesses.textContent = (`You have ${guessesRemaining} guesses left!`);
        results.textContent = (`Too high!Try again`);
    }
    if (answer === -1) {
        numberOfGuesses.textContent = (`You have ${guessesRemaining} guesses left!`);
        results.textContent = (`Too low!Try again`);
    }
    if (answer === 0) {
        results.textContent = (`You won! Go play the lotto right now. You are super lucky!`);
        submitButton.disabled = true;
        numberOfGuesses.textContent = '';
    } else if (guessesRemaining === 0 && answer !== 0) {
        numberOfGuesses.textContent = (`You have no guesses left. Back to square one`);
        submitButton.disabled = true;
        results.textContent = '';
    } 
});
