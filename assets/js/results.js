const params = new URLSearchParams(window.location.search)
const totalCal = parseInt(params.get('totalCal'));

const cyclingMile = (totalCal / 48);
const twentyBurpees = (totalCal / 15) * 20;
const runningMile = (totalCal / 140);
const walkingMile = (totalCal / 110);
const twentySquats = (totalCal / 10.5) * 20;
const rowingMile = (totalCal / 90);
const twentySitups = (totalCal / 14) * 20;
const sexMinute = (totalCal / 6);

const getWholeNumber = (aNumber) => {
    return (aNumber < 1) ? aNumber.toFixed(2) : aNumber.toString().split('.')[0]
}

// console.log(cyclingMile)
// console.log(runningMile)
// console.log(twentyBurpees)
// console.log(twentySitups)
// console.log(rowingMile)
// console.log(twentySquats);
console.log(sexMinute)

$('.burpees').text(getWholeNumber(twentyBurpees));
$('.situps').text(getWholeNumber(twentySitups));
$('.squats').text(getWholeNumber(twentySquats));
$('.run').text(getWholeNumber(runningMile) + "mi.");
$('.cycling').text(getWholeNumber(cyclingMile) + "mi.");
$('.walk').text(getWholeNumber(walkingMile) + "mi.");
$('.rowing').text(getWholeNumber(rowingMile) + "mi.");
$('.sex').text(getWholeNumber(sexMinute) + "min");
