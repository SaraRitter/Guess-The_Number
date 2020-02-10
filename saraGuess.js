const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  // welcome the user and wait to finish
  const answer =await welcome()
  let guess = getRandomInt(1, 101)
  while (guess !== parseInt(answer)) {
    console.log('Computer guess: ', guess);
    guess = getRandomInt(1, 101);

  }
  console.log('The secret number is: ' ,guess);

      // Now try and complete the program
    process.exit();
  }

  async function welcome() {
    console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
    let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
    console.log('You entered: ' + secretNumber);
    return secretNumber;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min)) + min
  }

  function makeGuess() {
    // make guess as to what the number is

  }

  function askifCorrect() {
    //ask if the number is correct
  }

  function narrowPossibleGuesses() {
    //remove guess from the set of possible numbers
  }

