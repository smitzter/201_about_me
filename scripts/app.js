'use strict';

// ******** DECLARE VARIABLES  ******** //
var userName;
var points = 0;
var userAnswer1;
var userAnswer2;
var userAnswer3;
var userAnswer4;
var userAnswer5;

// ******** INITIAL PROMPT  ******** //

// Initial prompt to greet user and solicite their name
userName = prompt('Welcome to my page! My name is Alana. What\'s your name?');
console.log('userName = ' + userName);

// ******** START QUIZ  ******** //

// Question 1 - Is pink my favorite color?
console.log('Question 1: Is pink my favorite color?');
userAnswer1 = prompt('Nice to meet you ' + userName + '. Let\'s play a game! Do you think my favorite color is pink? Answer YES or NO.').toLowerCase();
console.log('userAnswer1 = ' + userAnswer1);
console.log('Correct answer = yes');

if (userAnswer1 === 'yes' || userAnswer1 === 'y') {
  points++;
  alert('You got it right! My favorite color IS pink! You\'re total score is: ' + points);
  console.log('The user got question 1 correct');
} else {
  alert('Wrong! It\'s pink! You\'re total score is still: ' + points);
  console.log('The user got question 1 incorrect');
}

console.log('Total Score: ' + points);

// Question 2 - Are elephants my favorite animal?
console.log('Question 2: Are elephants my favorite animal?');
userAnswer2 = prompt('Question 2: Are elephants my favorite animal? Answer YES or NO.').toLowerCase();
console.log('userAnswer2 = ' + userAnswer2);
console.log('Correct answer = yes');

if (userAnswer2 === 'yes' || userAnswer2 === 'y') {
  points++;
  alert('You got it right! Elepahnts ARE my favorite animal! You\'re total score is: ' + points);
  console.log('The user got question 2 correct');
} else {
  alert('Wrong! Elephants are the best. You\'re total score is still: ' + points);
  console.log('The user got question 2 incorrect');
}

console.log('Total Score: ' + points);

// Question 3 - Is coffee my favorite food?
console.log('Question 3: Is coffee my favorite food?');
userAnswer3 = prompt('Question 3: Is Coffee my favorite food? Answer YES or NO.').toLowerCase();
console.log('userAnswer3 = ' + userAnswer3);
console.log('Correct answer = no');

if (userAnswer3 === 'no' || userAnswer3 === 'n') {
  points++;
  alert('You got it RIGHT! Coffee is disgusting. You\'re total score is: ' + points);
  console.log('The user got question 3 correct');
} else {
  alert('Wrong! I hate coffee. You\'re total score is still: ' + points);
  console.log('The user got question 3 incorrect');
}

console.log('Total Score: ' + points);

// Question 4 - Is it true that I've visited Disney theme parks more than 12 times?
console.log('Question 4: Is it true that I\'ve visited Disney theme parks more than 12 times?');
userAnswer4 = prompt('Question 4: Is it true that I\'ve visited Disney theme parks more than 12 times? Answer YES or NO.').toLowerCase();
console.log('userAnswer4 = ' + userAnswer4);
console.log('Correct answer = yes');

if (userAnswer4 === 'yes' || userAnswer4 === 'y') {
  points++;
  alert('That\'s right! I love Disney so much that I even got engaged there! You\'re total score is: ' + points);
  console.log('The user got question 4 correct');
} else {
  alert('Wrong! It may be hard to believe, but I try to go to Disney at LEAST once a year. You\'re total score is still: ' + points);
  console.log('The user got question 4 incorrect');
}

console.log('Total Score: ' + points);

// Question 5 - I have an adorable dog named Winnie. Is it true that we adopted her from Japan?
console.log('Question 5: I have an adorable dog named Winnie. Is it true that we adopted her from Japan?');
userAnswer5 = prompt('Question 5: I have an adorable dog named Winnie. Is it true that we adopted her from Japan? Answer YES or NO.').toLowerCase();
console.log('userAnswer5 = ' + userAnswer5);
console.log('Correct answer = no');

if (userAnswer5 === 'no' || userAnswer5 === 'n') {
  points++;
  alert('You got it right! We adopted her from Taiwan, where she was a street dog for 5 months before being rescued and finding us. You\'re total score is: ' + points);
  console.log('The user got question 5 correct');
} else {
  alert('We actually adopted her from Taiwan, where she was a street dog for 5 months before being rescued and finding us. You\'re total score is still: ' + points);
  console.log('The user got question 5 incorrect');
}


// ******** FINAL SCORE  ******** //

console.log('Total Score: ' + points);
console.log('End of quiz');

if (points === 1) {
  alert ('Congrats for finishing my quiz! You got ' + points + ' question correct out of 5.');
} else if ((points > 1 && points < 6) || points === 0) {
  alert ('Congrats for finishing my quiz! You got ' + points + ' questions correct out of 5.');

} else {
  console.log ('Error: score is being determined incorrectly.');
}
