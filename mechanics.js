import { askUserToToggleLight } from './functions.js';

export async function controlLight() {
    const userChoice = await askUserToToggleLight();

    if (userChoice === 'on') {
        checkPowerHouseStatus('on');
        console.log('The lights are turned on!');
    } else if (userChoice === 'off') {
        checkPowerHouseStatus('off');
        console.log('Lights are still off.');
    } else {
        console.log('Invalid input. Please type "on" or "off".');
    }
}

export function checkPowerHouseStatus(statusRequest) {
    let powerHouseStatus = powerHouse(statusRequest);

    if (statusRequest === 'on') {
        console.log('The light is already turned on!');
    } else if (statusRequest === 'off') {
        console.log('The light is off');
    }
}

export function powerHouse(checkIfLightIsOnOrOff) {
    let powerHouseStatus = checkIfLightIsOnOrOff === 'on' ? 'on' : 'off';
    console.log(powerHouseStatus);
    return powerHouseStatus;
}





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
