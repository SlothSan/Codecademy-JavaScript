const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      return console.log('Thats not a valid input!');
    }
  };
  
  function getComputerChoice () {
    randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "The game was a tie!";
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won.';
      } else {
        return 'You win, way to go.';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won.';
      } else {
        return 'You win, way to go.';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won.';
      } else {
        return 'You win, way to go.';
      }
    }
  
    if (userChoice === 'bomb') {
      return 'You win, nice hacks man.';
    }
  }
  
  function playGame () {
   userChoice = getUserChoice('rock');
   computerChoice = getComputerChoice();
   console.log(userChoice);
   console.log(computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();