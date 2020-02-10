const generateTarget = () => Math.floor(Math.random() * 10)
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {

  humanguess = Math.floor(Math.random() * 10 );
  computerGuess = Math.floor(Math.random() * 10);
  console.log(computerGuess);
  console.log(computerGuess);

  secretTarget = generateTarget();
  console.log(secretTarget);
  const valueH = Math.abs(secretTarget - humanGuess);
  const valueCPU = Math.abs(secretTarget - computerGuess);  

  if (valueH < valueCPU) {
    return true;
  } else if (valueCPU < valueH) {
    return false;
  } else if (valueH == valueCPU) {
    return true;
  }

}

console.log(compareGuesses());