// Calculate 3v3 dice rolls 1000000 and average the troop loss

// Calculate 100000 dice rolls of 3v3 and determine probable loss

// function capRoll(troopsArr) {
//   return remainingTroops;
// }

// function diceRoll() {
//   let arrayOf3Dice = [
//     Math.floor(Math.random() * 5 + 1),
//     Math.floor(Math.random() * 5 + 1),
//     Math.floor(Math.random() * 5 + 1),
//   ];
//   arrayOf3Dice.sort((a, b) => a - b);
//   return arrayOf3Dice;
// }

// let troops = [10000, 10000];

// console.log(diceRoll());

function rollDice(numDice) {
  let rolls = [];
  for (let i = 0; i < numDice; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return rolls.sort((a, b) => b - a);
}

function playGame(X, Y) {
  while (X > 1 && Y > 0) {
    // let numDice = Math.min(3, X, Y);
    let numDiceX = Math.min(3, X);
    let numDiceY = Math.min(3, Y);
    let rollsX = rollDice(numDiceX);
    let rollsY = rollDice(numDiceY);

    for (let i = 0; i < numDiceY; i++) {
      if (rollsX[i] > rollsY[i]) {
        Y--;
      } else {
        X--;
      }
    }
  }
  return { X, Y };
}

// let X = 10; // initial points for player 1
// let Y = 10; // initial points for player 2
// let result = playGame(X, Y);
// console.log(`Player 1 has ${result.X} points left.`);
// console.log(`Player 2 has ${result.Y} points left.`);

function simulateGames(numGames, maxPoints) {
  let winRates = {};
  for (let X = 1; X <= maxPoints; X++) {
    for (let Y = 1; Y <= maxPoints; Y++) {
      let player1Wins = 0;
      for (let i = 0; i < numGames; i++) {
        let result = playGame(X, Y);
        if (result.X > 1) {
          player1Wins++;
        }
      }
      winRates[`${X},${Y}`] = player1Wins / numGames;
    }
  }
  return winRates;
}

// let numGames = 1000; // number of games to simulate for each pair of X and Y
// let maxPoints = 1000; // maximum number of points to test for X and Y
// let winRates = simulateGames(numGames, maxPoints);

// print the win rates
// for (let points in winRates) {
//   console.log(`Win rate for X,Y = ${points}: ${winRates[points]}`);
// }

function simulateSpecificGames(numGames, X, Y) {
  let player1Wins = 0;
  for (let i = 0; i < numGames; i++) {
    let result = playGame(X, Y);
    if (result.X > 1) {
      player1Wins++;
    }
  }
  return player1Wins / numGames;
}

let X = 3; // specify the points for player 1
let Y = 1; // specify the points for player 2
let numGames = 10000000; // specify the number of games to simulate
let winRate = simulateSpecificGames(numGames, X, Y);

console.log(`Win rate for X=${X}, Y=${Y} over ${numGames} games: ${winRate}`);
