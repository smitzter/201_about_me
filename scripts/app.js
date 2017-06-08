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
function askQuestion(questionIndex) {
  userAnswer = prompt(guessingGameInfo[questionIndex] [0]).toLowerCase();
  console.log('Question 1: userAnswer = ' + userAnswer);
  console.log('Correct answer = ' + guessingGameInfo[questionIndex][1]);
}
// ask user first question and save answer.
askQuestion(0);

console.log('Question 1: userAnswer = ' + userAnswer);
console.log('Correct answer = ' + guessingGameInfo[0][1]);

//if the answer is correct:
if (userAnswer === guessingGameInfo[0][1] || userAnswer === guessingGameInfo[0][1][0]) {
  //add to points, and alert the user they got the answer right
  points++;
  alert('You got it right! My favorite color IS pink! Your total score is: ' + points);
  console.log('The user got question 1 correct');
} else {
  //of not, tell the user the correct answer.
  alert('Wrong! It IS pink! Your total score is: ' + points);
  console.log('The user got question 1 incorrect');
}

console.log('Total Score: ' + points);

// Question 2 - Are elephants my favorite animal?
askQuestion(1);

if (userAnswer === guessingGameInfo[1][1] || userAnswer === guessingGameInfo[1][1][0]) {
  points++;
  alert('You got it right! Elephants ARE my favorite animal! Your total score is: ' + points);
  console.log('The user got question 2 correct');
} else {
  alert('Wrong! Elephants are the best. Your total score is still: ' + points);
  console.log('The user got question 2 incorrect');
}

console.log('Total Score: ' + points);

// Question 3 - Is coffee my favorite food?
askQuestion(2);

if (userAnswer === guessingGameInfo[2][1] || userAnswer === guessingGameInfo[2][1][0]) {
  points++;
  alert('You got it RIGHT! Coffee is disgusting. Your total score is: ' + points);
  console.log('The user got question 3 correct');
} else {
  alert('Wrong! I hate coffee. Your total score is still: ' + points);
  console.log('The user got question 3 incorrect');
}

console.log('Total Score: ' + points);

// Question 4 - Is it true that I've visited Disney theme parks more than 12 times?
askQuestion(3);

if (userAnswer === guessingGameInfo[3][1] || userAnswer === guessingGameInfo[3][1][0]) {
  points++;
  alert('That\'s right! I love Disney so much that I even got engaged there! Your total score is: ' + points);
  console.log('The user got question 4 correct');
} else {
  alert('Wrong! It may be hard to believe, but I try to go to Disney at LEAST once a year. Your total score is still: ' + points);
  console.log('The user got question 4 incorrect');
}

console.log('Total Score: ' + points);

// Question 5 - I have an adorable dog named Winnie. Is it true that we adopted her from Japan?
askQuestion(4);

if (userAnswer === guessingGameInfo[4][1] || userAnswer === guessingGameInfo[4][1][0]) {
  points++;
  alert('You got it right! We adopted her from Taiwan, where she was a street dog for 5 months before being rescued and finding us. Your total score is: ' + points);
  console.log('The user got question 5 correct');
} else {
  alert('We actually adopted her from Taiwan, where she was a street dog for 5 months before being rescued and finding us. Your total score is still: ' + points);
  console.log('The user got question 5 incorrect');
}

console.log('Total Score: ' + points);

// Question 6 - I'm thinking of a number... what is it?

do {
  askQuestion(5);

  // if the answer gets it right
  if (userAnswer === guessingGameInfo[5][1]) {
    points++;
    alert('Correct! Wow, you read my mind! Your total score is: ' + points);
    tryAgain = false;
    console.log('The user got question 5 correct');
  } else if (guesses === 4) {
    //else if the user is out of attempts
    alert('Nope! The answer was ' + guessingGameInfo[5][1] + '. You score is still: ' + points + '.');
    tryAgain = false;
  } else if (userAnswer < guessingGameInfo[5][1]){
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

//Question 7 - I've been to 6 countries other than the US. Can you guess the name of one of them?

tryAgain = true; //reset tryAgain to be turned on
guesses = 1; //reset guesses for question 7

do {
  askQuestion(6);

// for each item in the array:
  for (var i = 0; i < guessingGameInfo[6][1].length; i++) {
    // if the answer is correct
    if (userAnswer === guessingGameInfo[6][1][i]) {
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
