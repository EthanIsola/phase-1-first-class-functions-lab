// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    //return drivers.slice(0,2)
    let var1 = drivers[0];
    let var2 = drivers[1];
    let ar1 = [var1, var2];
    return ar1;
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice((drivers.length-2),(drivers.length))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(inc){
    return function fareQuintupler(fare){
        return fare*inc;
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers,pick){
    return pick(drivers);
}