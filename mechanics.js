/*
---@@--2. Create helperFunctions
*/
TODO:
// ---@@--helperFunc1.
function checkPowerHouseStatus(statusRequest) {

// sideIdea: if currentStatusOfPowerHouseOn === 'on' // return lightIsOn

        switch(statusRequest === 'on' || statusRequest === 'off') {
            case (statusRequest === 'on'): return powerHouseLightIsOn(), console.log('The light is already turned on!')


            case (statusRequest === 'off'): return powerHouseStatusOff()
        };


    };




/*
TODO:
---@@--helperFunc2. powerHouse() {
    let powerHouseStatusOn = 'on'
    let powerHouseStatusOff = 'off'
};






TODO:
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
