'use strict';

//check this later to see how many you got right
var questionRight = 0;
var questions = [ 'Do I play a musical instrument?',
                  'Do my hobbies include drawing?',
                  'Is my highest level of education a masters?',
                  'Am I big video game nerd?',
                  'Am I originally from San Francisco?'];
var myAnswers = [ ['no','yes','no','yes','no'],
                  ['n','y','n','y','n']];
var wrongAnswers = [['yes','no','yes','no','yes'],
                    ['y','n','y','n','y']];
var rightResponse = [ 'Yup, I\'m too busy coding to be playing an instrument. ;)',
                      'That\'s correct. I\'ve been drawing for years and was even an art major once.',
                      'That\'s right! I actually have a Ph.D. :D',
                      'Yup, been playing video games all my life!',
                      'You\'re right. I\'m actually from Los Angeles!...Stop booing me.'];
var wrongResponse = [ 'I don\'t actually play an instrument anymore. I used to play piano as a kid but I hated it.',
                      'Actually, I do enjoy drawing.',
                      'Nope, one step further. :D',
                      'Actually, I really do enjoy playing video games.',
                      'Nope, but I did go to school in the Bay Area!'];
var wtfResponse = [ 'That\'s a weird answer...',
                    'Is that something you do? O_o',
                    'You need a bit more schooling I see...',
                    'Have you not experienced the joys of playing video games you unnerd?!',
                    'Where on earth is that?!'];
//var userAnswers = [];
//first prompt
alert('Hi everyone and welcome to my page. For fun, let\'s first start with a little quiz to see how much you know about me. Just have fun with your answers! :)');

for (var ii = 0; ii < questions.length; ii++) {
  var answer = prompt(questions[ii]).toLowerCase();
  console.log('The user input is:',answer);
  if (answer === myAnswers[0][ii] || answer === myAnswers[1][ii]) {
    alert(rightResponse[ii]);
    questionRight += 1;
  } else if (answer === wrongAnswers[0][ii] || answer === myAnswers[1][ii]) {
    alert(wrongResponse[ii]);
  } else {
    alert(wtfResponse[ii]);
  }
}
console.log('The number of questions right is:', questionRight);

//Guessing game starts
//sixth prompt
var maxNumber = 10;
var minNumber = 1;
var ranNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log('The random number is:',ranNumber);
var numGuesses = 4;
console.log('The number of guesses allowed is:', numGuesses);
var loopCounter = 0;
alert('Now we\'re going to play a guessing game! Try and guess how many coffees I want to drink right now. It\'ll be between 1 and 10. I\'ll give you ' + numGuesses + ' guesses to get it. If you guess too high or too low, I\'ll inform you. Good luck!');

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
    alert('You didn\'t enter anything so you lost a turn! :(');
  } else if (isNaN(Number(userGuess))) {
    alert('You entered a string, so you lose a turn. :(');
  } else {
    userGuess = Number(userGuess);
    if (ranNumber === userGuess) {
      alert('That\'s correct! Congrats!');
      questionRight += 1; //increment the number of correct answers
      break;
    } else if (userGuess < minNumber || userGuess > maxNumber){
      alert('That\'s is outside the range of the allowed guesses! :(');
    } else if (ranNumber > userGuess) {
      alert('You guessed too low!');
    } else if (ranNumber < userGuess) {
      alert('You guessed too high!');
    } else {
      alert('What on earth did you enter?');
    }
  }
}

//seventh prompt
var citiesVisited = ['Seattle','Tokyo','Kyoto','Minneapolis','Denver','Okinawa','Yokohama','Osaka','San Francisco', 'Los Angeles','Las Vegas','Houston'];
var citiesVisitedLowCase = ['seattle','tokyo','kyoto','minneapolis','denver','okinawa','yokohama','osaka','san francisco','los angeles','las vegas','houston'];
var citiesGuess = 6;
var cityLoopCounter = 0;
alert('So for this next question, I\'d like for you to try and guess a city I\'ve visited. You\'ll get ' + citiesGuess + ' tries. If you get even one correct, you pass and as a bonus I\'ll show you the rest of the cities I\'ve visited. Good luck!');

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
    alert('You didn\'t enter anything so you lost a turn! :(');
  } else if (!isNaN(Number(userCityGuess))) {
    alert('You entered a number, so you lose a turn. :(');
  } else if (indexCityGuess != -1) {
    citiesVisited.splice(indexCityGuess, 1);
    questionRight += 1; //increment the number of correct answers
    var msg = 'That\'s right! I\'ve also visited';
    for (var k = 0; k < citiesVisited.length; k++) {
      if (k === (citiesVisited.length - 1)) {
        msg = msg + ' and ' + citiesVisited[k] + '.';
        console.log(msg);
      } else {
        msg = msg + ' ' + citiesVisited[k] + ',';
        console.log(msg);
      }
    }
    alert(msg);
    break;
  } else {
    alert('Where on earth is ' + userCityGuess + '?');
  }
}

//calculate your score
if (questionRight >= 7){
  alert('You got all questions right. Are you sure you\'re not me? :D');
} else if (questionRight >= 5) {
  alert('You got ' + questionRight + ' out of 7 questions right. That\'s crazy good!');
} else if (questionRight >= 3) {
  alert('You got ' + questionRight + ' out of 7 questions right. We might actually be friends.');
} else if (questionRight >= 1) {
  alert('You got ' + questionRight + ' out of 7 questions right. We should have lunch some time.');
} else {
  alert('You got ' + questionRight + ' out of 7 questions right. We don\'t know each other at all! WHO ARE YOU?!');
}
