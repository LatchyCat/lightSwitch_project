import { controlLight } from './mechanics.js';

controlLight(); // Call controlLight without arguments


// import { checkPowerHouseStatus, powerHouse } from './functions.js';
// import readline from 'readline';
// import { controlLight } from './mechanics.js';

// controlLight();


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function lightSwitch(typeOnOrOff) {
//   let result = [];

//   if (typeOnOrOff === 'on') {
//     result.push(checkPowerHouseStatus(typeOnOrOff));
//   }
//   if (typeOnOrOff === 'off') {
//     result.push(checkPowerHouseStatus(typeOnOrOff));
//   }

//   return result;
// }


// function userPrompt() {
//   rl.question('The light is currently off. Do you want to turn it on? (Type "turn on" or "keep off"): ', (answer) => {
//     if (answer.toLowerCase() === 'turn on') {
//       powerHouse('on');
//       console.log('The lights are turned on!');
//     } else if (answer.toLowerCase() === 'keep off') {
//       powerHouse('off');
//       console.log('Lights are still off.');
//     } else {
//       console.log('Invalid input. Please type "turn on" or "keep off".');
//       userPrompt(); // Ask the user again for valid input
//     }

//     rl.close();
//   });
// }

// // Call the userPrompt function to initiate the user interaction
// userPrompt();
