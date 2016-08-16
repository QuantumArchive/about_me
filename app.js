'use strict';

//first prompt
var musicQuestionAnswer = prompt('Do I play a musical instrument?').toLowerCase();
//check this later to see how many you got right
var questionRight = 0;

if (musicQuestionAnswer === 'yes' || musicQuestionAnswer === 'y') {
  console.log('I don\'t actually play an instrument anymore. I used to play piano as a kid but I hated it.');
} else if (musicQuestionAnswer === 'no' || musicQuestionAnswer === 'n') {
  console.log('Yup, I\'m too busy coding to be playing an instrument. ;)');
  questionRight += 1;
} else {
  console.log('That\'s a weird answer...');
}

//second prompt
var hobbyQuestionAnswer = prompt('Do my hobbies include drawing?').toLowerCase();

if (hobbyQuestionAnswer === 'yes' || hobbyQuestionAnswer === 'y') {
  console.log('That\'s correct. I\'ve been drawing for years and was even an art major once.');
  questionRight += 1;
} else if (hobbyQuestionAnswer === 'no' || hobbyQuestionAnswer === 'n') {
  console.log('Actually, I do enjoy drawing.');
} else {
  console.log('Is that something you do? O_o');
}

//third prompt
var educationLevel = prompt('Is my highest level of education a masters?').toLowerCase();

if (educationLevel === 'yes' || educationLevel === 'y') {
  console.log('Nope, one step further. :D');
} else if (educationLevel === 'no' || educationLevel === 'n') {
  console.log('That\'s right! I actually have a Ph.D. :D');
  questionRight += 1;
} else {
  console.log('You need a bit more schooling I see...');
}

//fourth prompt
var videoGameQuestion = prompt('Am I big video game nerd?').toLowerCase();

if (videoGameQuestion === 'yes' || videoGameQuestion === 'y') {
  console.log('Yup, been playing video games all my life!');
  questionRight += 1;
} else if (videoGameQuestion === 'no' || videoGameQuestion === 'n') {
  console.log('Actually, I really do enjoy playing video games.');
} else {
  console.log('Have you not experienced the joys of playing video games you unnerd?!');
}

//fifth prompt
var homeTownQuestion = prompt('Am I originally from San Francisco?').toLowerCase();

if (homeTownQuestion === 'yes' || homeTownQuestion === 'y') {
  console.log('Nope, but I did go to school in the Bay Area!');
} else if (homeTownQuestion === 'no' || homeTownQuestion === 'n') {
  console.log('You\'re right. I\'m actually from Los Angeles!...Stop booing me.');
  questionRight += 1;
} else {
  console.log('Where on earth is that?!');
}

//calculate your score
switch(questionRight) {
case 1:
  alert('You got 1/5 questions right. We should have lunch some time.');
  break;
case 2:
  alert('You got 2/5 questions right! Kudos.');
  break;
case 3:
  alert('You got 3/5 questions right! We might actually be friends.');
  break;
case 4:
  alert('You got 4/5 questions right. That\'s crazy good.');
  break;
case 5:
  alert('You got all questions right. Are you sure you\'re not me? :D');
  break;
default:
  alert('You got 0/5 questions right. We don\'t know each other at all! WHO ARE YOU?!');
}
