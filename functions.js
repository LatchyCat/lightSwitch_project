import readline from 'readline';

export function askUserToToggleLight() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Here is a light switch. Do you want to turn it on or off? (Type "on" or "off"): ', (answer) => {
            rl.close();
            resolve(answer.toLowerCase());
        });
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
