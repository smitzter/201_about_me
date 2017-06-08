'use strict';

// ******** DECLARE VARIABLES  ******** //
var userName; // to hold the user's name
var points = 0; // points in the quiz game, starting at 0
var userAnswer; // the user's answer to the current question
var tryAgain; // for questions that get multiple attempts, does the user get more attempts?
var guesses = 1; // for questions that get multiple attempts, the attempt count starts at 1

// guessingGameInfo is an array that consists of an array for each question in the guessing game. Each nested array consists of a string with the question and a string/string array with the answer(s).
var guessingGameInfo = [];
guessingGameInfo.push(['Is pink my favorite color?', 'yes']);
guessingGameInfo.push(['Are elephants my favorite animal?', 'yes']);
guessingGameInfo.push(['Is coffee my favorite food?', 'no']);
guessingGameInfo.push(['Is it true that I\'ve visited Disney theme parks more than 12 times?', 'yes']);
guessingGameInfo.push(['I have an adorable dog named Winnie. Is it true that we adopted her from Japan?', 'no']);
guessingGameInfo.push(['I\'m thinking of a number... what is it?', Math.floor(Math.random() * 11).toString()]);
guessingGameInfo.push(['I\'ve been to 6 countries other than the US. Can you guess the name of one of them?', ['canada', 'mexico', 'france', 'italy', 'austria', 'england']]);

// ******** INITIAL PROMPT  ******** //

// Initial prompt to greet user and solicite their name
userName = prompt('Welcome to my page! My name is Alana. What\'s your name?');
// If the answer is not a valid name, repeat the question until answer is valid
while (!userName) {
  console.log('Invalid userName submitted. Try again');
  userName = prompt('Sorry... I didn\'t catch that. What is your name?');
}
console.log('userName = ' + userName);
alert('Nice to meet you ' + userName + '! Let\'s play a game.');
// ******** START QUIZ  ******** //

// Question 1 - Is pink my favorite color?
askQuestion(0);
yesNoLogic(0);

// Question 2 - Are elephants my favorite animal?
askQuestion(1);
yesNoLogic(1);

// Question 3 - Is coffee my favorite food?
askQuestion(2);
yesNoLogic(2);

// Question 4 - Is it true that I've visited Disney theme parks more than 12 times?
askQuestion(3);
yesNoLogic(3);

// Question 5 - I have an adorable dog named Winnie. Is it true that we adopted her from Japan?
askQuestion(4);
yesNoLogic(4);

// Question 6 - I'm thinking of a number... what is it?
numberQuestion(5);

//Question 7 - I've been to 6 countries other than the US. Can you guess the name of one of them?

tryAgain = true; //reset tryAgain to be turned on
guesses = 1; //reset guesses for question 7
multipleAnswersQuestion(6);

// ******** FINAL SCORE  ******** //

console.log('End of quiz');
console.log('Final Score: ' + points);

//if only one point, print 'question' as singular. If the user has more than one point, print 'questions' as plural.
if (points === 1) {
  alert ('Congrats ' + userName + ' for finishing my quiz! You got ' + points + ' question correct out of ' + guessingGameInfo.length + '.');
} else if ((points > 1 && points < 8) || points === 0) {
  alert ('Congrats ' + userName + ' for finishing my quiz! You got ' + points + ' questions correct out of ' + guessingGameInfo.length + '.');

} else {
  console.log ('Error: score is being determined incorrectly.');
}

// ******** FUNCTIONS  ******** //
function yesNoLogic(questionIndex) {
  if (userAnswer === guessingGameInfo[questionIndex][1] || userAnswer === guessingGameInfo[questionIndex][1][0]) {
    points++;
    alert('Correct! Your total score is: ' + points);
    console.log('The user got a question correct');
  } else {
    alert('Wrong! Your total score is still: ' + points);
    console.log('The user got a question incorrect');
  }
  console.log('Total Score: ' + points);
}
function askQuestion(questionIndex) {
  userAnswer = prompt(guessingGameInfo[questionIndex] [0]).toLowerCase();
  console.log('Question 1: userAnswer = ' + userAnswer);
  console.log('Correct answer = ' + guessingGameInfo[questionIndex][1]);
}

function numberQuestion(questionIndex){
  do {
    askQuestion(5);
    // if the answer gets it right
    if (userAnswer === guessingGameInfo[questionIndex][1]) {
      points++;
      alert('Correct! Wow, you read my mind! Your total score is: ' + points);
      tryAgain = false;
      console.log('The user got question 5 correct');
    } else if (guesses === 4) {
      //else if the user is out of attempts
      alert('Nope! The answer was ' + guessingGameInfo[questionIndex][1] + '. You score is still: ' + points + '.');
      tryAgain = false;
    } else if (userAnswer < guessingGameInfo[questionIndex][1]){
      // else if the user has extra attempts and guessed too low
      alert('Too low! Try again...');
      guesses++;
      tryAgain = true;
      console.log('User to retry question 6. They guesses too low.');
    } else {
      // else if the user has extra attempts and guessed too high
      alert('Too high! Try again...');
      guesses++;
      tryAgain = true;
      console.log('User to retry question 6. They guesses too high.');
    }
  } while (tryAgain && guesses <= 4); // keep running while tryAgain is true and they've had no more than 4 guesses.

  console.log('Total Score: ' + points);

}
function multipleAnswersQuestion(questionIndex) {
  do {
    askQuestion(6);

  // for each item in the array:

    for (var i = 0; i < guessingGameInfo[questionIndex][1].length; i++) {
      // if the answer is correct
      if (userAnswer === guessingGameInfo[questionIndex][1][i]) {
        //turn off tryAgain, increment points, alert user
        tryAgain = false;
        points++;
        alert('Yes! I\'ve visited Canada, Mexico, England, France, Italy, and Austria. Your total score is: ' + points);
        console.log('The user got question 6 correct');
      }
    }
    // if the user has not gotten the right answer and the user is out of attempts
    if (guesses === 6) {
      alert('Nope! I\'ve visited Canada, Mexico, England, France, Italy, and Austria. You score is still: ' + points + '.');
      tryAgain = false;
      // if the user has not gotten the right answer and has additional attempts.
    } else if (tryAgain) {
      alert('WRONG! Try again...');
      guesses++;
      console.log('User to retry question 7');
    }
  } while (tryAgain && guesses <= 6); // while the user has attempts left

}
