import readline from 'readline';

export function askUserToToggleLight() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Do you want to turn it on or off? (Type "on" or "off"): ', (answer) => {
            rl.close();
            resolve(answer.toLowerCase());
        });
    });
}


export function askUserToTurnOffLights() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Do you want to turn off the lights now? (Type "yes" or "no"): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            console.log('The lights are turned off.');
            clearTimeout(turnOffTimeout);
            rl.close();
        } else if (answer.toLowerCase() === 'no') {
            // Reset the timeout for turning off lights
            clearTimeout(turnOffTimeout);
            // Ask the user again after 5 seconds
            setTimeout(() => {
                askUserToTurnOffLights(rl);
            }, 5000);
        } else {
            console.log('Invalid input. Please type "yes" or "no."');
            askUserToTurnOffLights(rl); // Ask the user again for valid input
        }
    });
}







// export function askUserToToggleLight() {
//     return new Promise((resolve) => {
//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });

//         rl.question('Here is a light switch. Do you want to turn it on or off? (Type "on" or "off"): ', (answer) => {
//             rl.close();
//             resolve(answer.toLowerCase());
//         });
//     });
// }


// export function checkPowerHouseStatus(statusRequest) {
//     switch (statusRequest) {
//         case 'on':
//             powerHouse(statusRequest);
//             console.log('The light is already turned on!');
//             break;
//         case 'off':
//             powerHouse(statusRequest);
//             console.log('The light is off');
//             break;
//     }
// }

// export function powerHouse(checkIfLightIsOnOrOff) {
//     let powerHouseStatus = '';

//     if (checkIfLightIsOnOrOff === 'on') {
//         powerHouseStatus = 'on';
//         console.log(powerHouseStatus);
//     }

//     if (checkIfLightIsOnOrOff === 'off') {
//         powerHouseStatus = 'off';
//         console.log(powerHouseStatus);
//     }
// }
