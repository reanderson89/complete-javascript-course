const oneHundredDiceRolls = Array.from({length: 100}, () => Math.floor(Math.random() * 6) + 1)

console.log(oneHundredDiceRolls);