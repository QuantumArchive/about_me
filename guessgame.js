'use strict';

var questionRight = 0;

//Guessing game starts
//first prompt
var maxNumber = 10;
var minNumber = 1;
var ranNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log('The random number is:',ranNumber);
var numGuesses = 4;
console.log('The number of guesses allowed is:', numGuesses);
var loopCounter = 0;

//First question to be asked in the html
var firstQuestion = 'Now we\'re going to play a guessing game! Try and guess how many coffees I want to drink right now. It\'ll be between 1 and 10. I\'ll give you ' + numGuesses + ' guesses to get it. If you guess too high or too low, I\'ll inform you. Good luck!';

//link to the html ID
var firstCheck = document.getElementById('firstQuestion');
firstCheck.textContent = firstQuestion;
var firstMsg = '';
var htmlAnswersFirst = document.getElementById('answerFirstQuestion');

for (loopCounter; loopCounter <= numGuesses; loopCounter++) {
  console.log('The counter on the loop is:', loopCounter);

  if (loopCounter === numGuesses) {
    alert('That was ' + numGuesses + ' guesses. Sorry but you lose. :(');
    break;
  }
  var userGuess = prompt('Please enter a number between 1 and 10');
  console.log('The user\'s guess is:', userGuess);
  //This if statement will check if it's null and if it's not it will turn it into a number
  if (userGuess.length === 0) {
    firstMsg = firstMsg + 'Guess #' + (loopCounter + 1) + ': ' + userGuess + '<br />';
    alert('You didn\'t enter anything so you lost a turn! :(');
  } else if (isNaN(Number(userGuess))) {
    firstMsg = firstMsg + 'Guess #' + (loopCounter + 1) + ': ' + userGuess + '<br />';
    alert('You entered a string, so you lose a turn. :(');
  } else {
    userGuess = Number(userGuess);
    if (ranNumber === userGuess) {
      firstMsg = firstMsg + 'Guess #' + (loopCounter + 1) + ': ' + userGuess + ' - That\'s correct! Congrats!' + '<br />';
      alert('That\'s right!');
      questionRight += 1; //increment the number of correct answers
      htmlAnswersFirst.innerHTML = firstMsg;
      break;
    } else if (userGuess < minNumber || userGuess > maxNumber){
      firstMsg = firstMsg + 'Guess #' + (loopCounter + 1) + ': ' + userGuess + '<br />';
      alert('That\'s is outside the range of the allowed guesses! :(');
    } else if (ranNumber > userGuess) {
      firstMsg = firstMsg + 'Guess #' + (loopCounter + 1) + ': ' + userGuess + '<br />';
      alert('You guessed too low!');
    } else if (ranNumber < userGuess) {
      firstMsg = firstMsg + 'Guess #' + (loopCounter + 1) + ': ' + userGuess + '<br />';
      alert('You guessed too high!');
    } else {
      firstMsg = firstMsg + 'Guess #' + (loopCounter + 1) + ': ' + userGuess + '<br />';
      alert('What on earth did you enter?');
    }
  }
  htmlAnswersFirst.innerHTML = firstMsg;
}

//second prompt
var citiesVisited = ['Seattle','Tokyo','Kyoto','Minneapolis','Denver','Okinawa','Yokohama','Osaka','San Francisco', 'Los Angeles','Las Vegas','Houston'];
var citiesVisitedLowCase = ['seattle','tokyo','kyoto','minneapolis','denver','okinawa','yokohama','osaka','san francisco','los angeles','las vegas','houston'];
var citiesGuess = 6;
var cityLoopCounter = 0;
//second question string
var secondQuestion = 'So for this next question, I\'d like for you to try and guess a city I\'ve visited. You\'ll get ' + citiesGuess + ' tries. If you get even one correct, you pass and as a bonus I\'ll show you the rest of the cities I\'ve visited. Good luck!';
//link to the html ID
var secondCheck = document.getElementById('secondQuestion');
secondCheck.textContent = secondQuestion;
var secondMsg = '';
//variable for holding the answers
var htmlAnswersSecond = document.getElementById('answerSecondQuestion');

for (cityLoopCounter; cityLoopCounter <= citiesGuess; cityLoopCounter++) {
  console.log('The counter on the loop is:', cityLoopCounter);
  if (cityLoopCounter === citiesGuess) {
    alert('That was ' + citiesGuess + ' guesses. Sorry but you lose. :(');
    break;
  }
  //converts the guess into lower case entirely
  var userCityGuess = prompt('Please enter the name of a city that you think I\'ve visited.').toLowerCase().trim();
  console.log('The user\'s guess is:', userCityGuess);
  //This will look to see if the lowercase version of the city the user guessed exists or not
  var indexCityGuess = citiesVisitedLowCase.indexOf(userCityGuess);
  console.log('The index of the city the user guess is:',indexCityGuess);
  //This if statement will check if it's null and if it's not it will turn it into a number
  if (userCityGuess.length === 0) {
    secondMsg = secondMsg + 'Guess #' + (cityLoopCounter + 1) + ': ' + userCityGuess + '<br />';
    alert('You didn\'t enter anything so you lost a turn! :(');
  } else if (!isNaN(Number(userCityGuess))) {
    secondMsg = secondMsg + 'Guess #' + (cityLoopCounter + 1) + ': ' + userCityGuess + '<br />';
    alert('You entered a number, so you lose a turn. :(');
  } else if (indexCityGuess != -1) {
    secondMsg = secondMsg + 'Guess #' + (cityLoopCounter + 1) + ': ' + userCityGuess + ' - That\'s correct! Congrats!' + '<br />';
    citiesVisited.splice(indexCityGuess, 1);
    questionRight += 1; //increment the number of correct answers
    var msgToUser = 'That\'s right! I\'ve also visited';
    for (var k = 0; k < citiesVisited.length; k++) {
      if (k === (citiesVisited.length - 1)) {
        msgToUser = msgToUser + ' and ' + citiesVisited[k] + '.';
        console.log(msgToUser);
      } else {
        msgToUser = msgToUser + ' ' + citiesVisited[k] + ',';
        console.log(msgToUser);
      }
    }
    alert(msgToUser);
    htmlAnswersSecond.innerHTML = secondMsg;
    break;
  } else {
    secondMsg = secondMsg + 'Guess #' + (cityLoopCounter + 1) + ': ' + userCityGuess + '<br />';
    alert('Where on earth is ' + userCityGuess + '?');
  }
  htmlAnswersSecond.innerHTML = secondMsg;
}


//calculate your score
if (questionRight >= 2){
  alert('You got all questions right. Are you sure you\'re not me? :D');
} else if (questionRight >= 1) {
  alert('You got ' + questionRight + ' out of 2 questions right. That\'s crazy good!');
} else {
  alert('You got ' + questionRight + ' out of 2 questions right. We don\'t know each other at all! WHO ARE YOU?!');
}
