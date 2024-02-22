let correctAnswers = 0;

let question1 = prompt('Do I want more children?');
let answer1 = 'yes';

if (question1.toLowerCase() === answer1.toLowerCase()) {
    alert('Yes, I do!');
    console.log('yes');
    correctAnswers++;
} else {
    alert('Incorrect');
    console.log('wrong');
}

let question2 = prompt('Do I wish you had a personal chef?');
let answer2 = 'yes';

if (question2.toLowerCase() === answer2.toLowerCase()) {
    alert('Yep. I hate doing dishes');
    console.log('yes');
    correctAnswers++;
} else {
    alert('Wrong, I would LOVE a personal chef');
    console.log('wrong');
}


let question3 = prompt('Do I have a 5-year plan?');
let answer3 = 'yes';

if (question3.toLowerCase() === answer3.toLowerCase()) {
    alert('Yes and I hope it all works out');
    console.log('yes');
    correctAnswers++;
} else {
    alert('Planning for the future is essential!');
    console.log('wrong');
}

let question4 = prompt('Do I want a new car?');
let answer4 = 'yes';

if (question4.toLowerCase() === answer4.toLowerCase()) {
    alert('Correct! I would love a truck!');
    console.log('yes');
    correctAnswers++;
} else {
    alert('Wrong, I want a new truck!');
    console.log('wrong');
}

let question5 = prompt('Do I want to move states?');
let answer5 = 'yes';

if (question5.toLowerCase() === answer5.toLowerCase()) {
    alert('Correct, I would also like to move someday');
    console.log('yes');
    correctAnswers++;
} else {
    alert('Incorrect, I hope to find the courage to leave someday');
    console.log('wrong');
}

let question6 = prompt('What is your name?');
document.write('<p>Hello! '+ question6 + '</p>');

let correctNumber = 28;
let maxTries = 4;

for (let i = 1; i <= maxTries; i++) {
    let userNumberGuess = prompt(`Attempt ${i}: Guess how old I am`);

    if (userNumberGuess === null) {
        alert('Thanks for playing!');
        break;
    }

    userNumberGuess = parseInt(userNumberGuess);

    if (isNaN(userNumberGuess)) {
        alert('Please enter a valid age');
    } else if (userNumberGuess > correctNumber) {
        alert('Too high!');
    } else if (userNumberGuess < correctNumber) {
        alert('Too low!');
    } else {
        alert('You are correct!');
        break;
    }

    if (i === maxTries) {
        alert(`Sorry, you've run out of attempts. The correct answer is ${correctNumber}.`);
    }
}


const possibleAnswers = ["pho", "curry", "hot pot", "korean bbq"];
const maxAttempts = 6;
let attempts = 0;
let correctGuesses = 0;

while (attempts < maxAttempts) {
    const userGuess = prompt("Guess my favorite Asian food");

    if (possibleAnswers.includes(userGuess)) {
        alert("That is one of my favorites!!!");
        correctGuesses++;
        break;
    } else {
        alert("I'm not sure about that!");
    }

    attempts++;
}

if (attempts === maxAttempts) {
    alert(`Sorry! You are out of attempts. You got ${correctGuesses} correct out of ${maxAttempts} questions. The correct answers are: pho, curry, hot pot, and korean bbq`);
}
alert(`You got ${correctAnswers} correct out of 7 questions.`);
