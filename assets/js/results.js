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

$(document).ready(function() {
    setTimeout(function() {
        $('#loading-animation').hide();
        $('#results-section').show();
    }, 10);
    $('.burpees').text(getWholeNumber(twentyBurpees));
    $('.burpees-twitter').attr('data-text', 'I need to do ' + getWholeNumber(twentyBurpees) + ' burpees in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    
    $('.situps').text(getWholeNumber(twentySitups));
    $('.situps-twitter').attr('data-text', 'I need to do ' + getWholeNumber(twentySitups) + ' sit-ups in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    
    $('.squats').text(getWholeNumber(twentySquats));
    $('.squats-twitter').attr('data-text', 'I need to do ' + getWholeNumber(twentySquats) + ' squats in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    
    $('.run').text(getWholeNumber(runningMile) + "mi.");
    $('.running-twitter').attr('data-text', 'I need to run ' + getWholeNumber(runningMile) + ' miles in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    
    $('.cycling').text(getWholeNumber(cyclingMile) + "mi.");
    $('.cycling-twitter').attr('data-text', 'I need to cycle ' + getWholeNumber(cyclingMile) + ' miles in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    
    $('.walk').text(getWholeNumber(walkingMile) + "mi.");
    $('.walking-twitter').attr('data-text', 'I need to walk ' + getWholeNumber(walkingMile) + ' miles in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    
    $('.rowing').text(getWholeNumber(rowingMile) + "mi.");
    $('.rowing-twitter').attr('data-text', 'I need to row ' + getWholeNumber(rowingMile) + ' miles in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    
    $('.sex').text(getWholeNumber(sexMinute) + "min");
    $('.sex-twitter').attr('data-text', 'I need to have moderate sex for ' + getWholeNumber(sexMinute) + ' minutes in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
});