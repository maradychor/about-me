
function childrenGuess () {
  console.log('Do you want more children?');
}
let question1 = prompt('Do you want more children?'); 
let answer1 = 'yes';

if (question1 === 'yes') {
  console.log('yes'); 
} else {
  alert('sorry to hear');
  console.log('wrong'); 
}


  

let question2 = prompt('Do you want to get married?');
let answer2 = 'yes';

if (question2 === 'yes') {
  console.log('yes'); 
} else {
  alert('sorry to hear!!');
  console.log('wrong'); 
}


let question3 = prompt('Do you have a 5 year plan?'); 
let answer3 = 'yes';

if (question3 === 'yes') {
  console.log('yes'); 
} else {
  alert('start working on it!');
  console.log('wrong');
}

let question4 = prompt('Do you want a new car?'); 
let answer4 = 'yes';

if (question4 === 'yes') {
  console.log('yes'); 
} else {
  alert('AWWW, its OK!');
  console.log('wrong');
}

let question5 = prompt('Do you want to move states?');
let answer5 = 'yes';

if (question5 === 'yes') {
  console.log('yes'); 
} else {
  alert('stay where you are then');
  console.log('wrong'); 
}

let question6 = prompt('What is your name?');
document.write('<p>Hello! '+ question6 + '</p>');

//end part 1

let userNumberGuess = prompt('Guess how old I am');
let correctNumber = 27;

if (userNumberGuess > correctNumber) {
  alert('Not that old');
} else if (userNumberGuess < correctNumber) {
  alert('Not that young');
} else {
  alert('You are correct');
}





//this is part 3
const possibleAnswers = ["pho", "curry", "hot pot", "korean bbq"];
const maxAttempts = 6;
let attempts = 0;

while (attempts < maxAttempts) {
  const userGuess = prompt("guess my favorite asian food");

  if (possibleAnswers.includes(userGuess)) {
    alert("That is one of my favorites!!!");
    break;
  } else {
    alert('Im not sure about that!');
  }

  attempts++;
}
if (attempts === maxAttempts) {
  alert('sorry! youre wrong there are no more tries'); 
}

//part 4
