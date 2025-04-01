const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create fare multipliers
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the passed function
const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
};
 console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));