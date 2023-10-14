/*

Terraria light switches logic
Reference: https://www.youtube.com/watch?v=zXPiqk0-zDY
TODO: Search up private variable / How to make a private variable

1. Create a function called 'lightSwitch'. Excepts one argument
---@@--mainFunction. function lightSwitch(typeOnOrOff) {
        let empty = [];
    if (typeOnOrOff === 'on' || typeOnOrOff === 'off') {
// The variable empty will hold the returned value of the callback function (Should return lightIsOn || lightIsOff)
        empty.push(checkPowerHouseStatus(statusRequest));
    }
    return empty;
};

SideIdea1. if the argument passed to lightSwitch === 'on' {trigger a function to check the status of powerHouse}
sideIdea1a. if the powerHouse status is === 'lightIsOn' return output: 'The light is already turned on'
sideIdea1b. if the powerHouse status is === 'lightIsOff' {trigger function status response: options: 'turnLightOn', 'don\tTurnLightOn'}
sideIdea1b,a. if powerHouse status is === 'lightIsOff' {}


SideIdea. The 'powerHouse will store the light switches status/ if status === 'on' powerHouse returns 'The electricity is flowing'


2. Create helperFunctions
TODO:
---@@--helperFunc1. checkPowerHouseStatus(statusRequest) {
    let statusPasser = statusRequest
    let statusHolder = '';
    let currentStatusOfPowerHouseOn = '';


    if (statusPasser === 'on') {
        statusHolder = 'on'
        console.log(statusHolder);
    };

    if (statusHolder === 'on') {
        currentStatusOfPowerHouse = 'on'
         console.log('The electricity is flowing')
    };



    let currentStatusOfPowerHouseOn = '';
    let currentStatusOfPowerHouseOff = 'off'

// sideIdea: if currentStatusOfPowerHouseOn === 'on' // return lightIsOn
        //'on       //'on'
    if status === powerHouseLightIsOn {
        console.log('The light is already turned on!')
    } else {
        return powerHouseStatusOff() //
    }
};



TODO:
---@@--helperFunc2. powerHouse() {
    let powerHouseStatusOn = 'on'
    let powerHouseStatusOff = 'off'
};






TODO:
helperFunc3. powerHouseLightIsOn() {};





TODO:
helperFunc4. powerHouseLightIsOff() {};




TODO:
helperFunc5.
helperFunc1
helperFunc1
helperFunc1
helperFunc1
helperFunc1


*/
