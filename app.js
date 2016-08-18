'use strict';

//check this later to see how many you got right
var questionRight = 0;
var questions = [ 'Do I play a musical instrument?',
                  'Do my hobbies include drawing?',
                  'Is my highest level of education a masters?',
                  'Am I big video game nerd?',
                  'Am I originally from San Francisco?'];
var myAnswers = ['no','yes','no','yes','no'];
var wrongAnswers = ['yes','no','yes','no','yes'];
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

//first prompt
alert('Hi everyone and welcome to my page. For fun, let\'s first start with a little quiz to see how much you know about me. Just have fun with your answers! :)');

for (var ii = 0; ii < questions.length; ii++) {
  var answer = prompt(questions[ii]).toLowerCase();
  console.log('The user input is:',answer);
  if (answer === myAnswers[ii] || answer === myAnswers[ii][0]) {
    alert(rightResponse[ii]);
    questionRight += 1;
  } else if (answer === wrongAnswers[ii] || answer === myAnswers[ii][0]) {
    alert(wrongResponse[ii]);
  } else {
    alert(wtfResponse[ii]);
  }
}
console.log('The number of questions right is:', questionRight);

//calculate your score
if (questionRight >= 5){
  alert('You got all questions right. Are you sure you\'re not me? :D');
} else if (questionRight >= 4) {
  alert('You got ' + questionRight + ' out of 5 questions right. That\'s crazy good!');
} else if (questionRight >= 3) {
  alert('You got ' + questionRight + ' out of 5 questions right. We might actually be friends.');
} else if (questionRight >= 1) {
  alert('You got ' + questionRight + ' out of 5 questions right. We should have lunch some time.');
} else {
  alert('You got ' + questionRight + ' out of 5 questions right. We don\'t know each other at all! WHO ARE YOU?!');
}

alert('So you got through the first part of the quiz. Click on the link as mentioned in the description box to try some guessing games to learn more about me!');
