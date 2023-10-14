import { checkPowerHouseStatus, powerHouse } from "/Users/latchy/Desktop/lightSwitch_project/everyThingInHere/mechanics.js";

function lightSwitch(typeOnOrOff) {
    let result = [];

    if (typeOnOrOff === 'on') {
        result.push(checkPowerHouseStatus(typeOnOrOff));
    }
    if (typeOnOrOff === 'off') {
        result.push(checkPowerHouseStatus(typeOnOrOff));
    }

    return result;
}

lightSwitch('off');
