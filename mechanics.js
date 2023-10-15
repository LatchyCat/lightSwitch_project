import readline from 'readline';

let lightStatus = 'off'; // Initialize light status
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let timer; // Add a timer variable

async function controlLight() {
    console.log('There is a light switch here.');

    const response = await askUserToToggleLight();

    if (response === 'on') {
        if (lightStatus === 'on') {
            console.log('The light is already turned on!');
            askUserToKeepLightsOn();
        } else {
            lightStatus = 'on';
            console.log('The lights are turned on!');
            askUserToKeepLightsOn();
        }
    } else if (response === 'off') {
        if (lightStatus === 'off') {
            console.log('The light is already turned off.');
        } else {
            console.log('The light is off');
        }
        rl.close();
    }
}

function askUserToKeepLightsOn() {
    rl.question('Do you want to keep the lights on? (Type "yes" or "no"): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            console.log('The lights will stay on.');
            // No need to set a timer; it will stay on until the user decides to turn it off.
        } else if (answer.toLowerCase() === 'no') {
            lightStatus = 'off';
            console.log('The lights are turned off.');
        } else {
            console.log('Invalid input. Please type "yes" or "no."');
            askUserToKeepLightsOn();
        }
        rl.close(); // Close the readline interface when done.
    });
}

async function askUserToToggleLight() {
    return new Promise((resolve) => {
        rl.question('Do you want to turn it on or off? (Type "on" or "off"): ', (answer) => {
            resolve(answer.toLowerCase());
        });
    });
}

export { controlLight };








// import { checkPowerHouseStatus, powerHouse } from './functions.js';


// // // Export individual functions, not as an object

// import { askUserToToggleLight } from './functions.js';

// export async function controlLight() {
//     const userChoice = await askUserToToggleLight();

//     if (userChoice === 'on') {
//         checkPowerHouseStatus('on');
//         console.log('The lights are turned on!');
//     } else if (userChoice === 'off') {
//         checkPowerHouseStatus('off');
//         console.log('Lights are still off.');
//     } else {
//         console.log('Invalid input. Please type "on" or "off".');
//     }
// }



// function checkPowerHouseStatus(statusRequest) {
//     switch (statusRequest) {
//         case 'on':
//             powerHouse(statusRequest);
//             // console.log('The light is already turned on!');
//             break;
//         case 'off':
//             powerHouse(statusRequest);
//             // console.log('The light is off');
//             break;
//     }
// }

// function powerHouse(checkIfLightIsOnOrOff) {
//     let powerHouseStatus = '';

//     if (checkIfLightIsOnOrOff === 'on') {
//         powerHouseStatus = 'on';
//         console.log(powerHouseStatus);
//     }

//     if (checkIfLightIsOnOrOff === 'off') {
//         powerHouseStatus = 'off';
//         console.log(powerHouseStatus);
//         if (powerHouseStatus = 'off') {

//         }
//     }
// }





/*
// TODO:
// ---@@--helperFunc3.
function powerHouseLightIsOn() {
   //WorkFlow if statusRequest is received as 'on'
    //1.statusRequest = 'on'
    //2.statusPasser = 'on'
    //3.first IF BLOCK (statusPasser === 'on'... reassign statusHolder = 'on')
    //4.second IF BLOCK (statusHolder === 'on'... reassign currentStatusOfPowerHouse = 'on' & console.log('The electricity is flowing'))
    //5.third IF BLOCK (currentStatusOfPowerHouse === 'on'... console.log(console.log('The light is already turned on!')))
    //6.
    let statusPasser = statusRequest
    let statusHolder = '';
    let currentStatusOfPowerHouse = '';


    if (statusPasser === 'on') {
       statusHolder = 'on' //reassign variable to 'on'
        console.log(statusHolder);
    };

    if (statusHolder === 'on') {
        currentStatusOfPowerHouse = 'on' //reassign variable to 'on'
         console.log('The electricity is flowing')
    };


};





// TODO:
helperFunc4. powerHouseLightIsOff() {};




// TODO:
helperFunc5.
helperFunc1
helperFunc1
helperFunc1
helperFunc1
helperFunc1

*/
