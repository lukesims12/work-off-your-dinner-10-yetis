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

    // ### SHOW LOADING ANIMATION ### //
    setTimeout(function() {
        $('#loading-animation').hide();
        $('#results-section').fadeIn(600);
    }, 100);

    // ### CALCULATE RESULTS AND OUTPUT TO SCREEN ### //
    $('.burpees').text(getWholeNumber(twentyBurpees));
    $('.burpees-twitter').attr('data-url', 'https://work-off-your-dinner.firebaseapp.com/?twimage=tw-share-burpees');
    $('.burpees-twitter').attr('data-text', 'I need to do ' + getWholeNumber(twentyBurpees) + ' burpees in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    $('.burpees-fb').attr('data-href', 'https://work-off-your-dinner.firebaseapp.com/?fbimage=fb-share-burpees&title=It will take ' + getWholeNumber(twentyBurpees) + ' burpees to work off my feast!');
    
    $('.situps').text(getWholeNumber(twentySitups));
    $('.situps-twitter').attr('data-url', 'https://work-off-your-dinner.firebaseapp.com/?twimage=tw-share-situps');
    $('.situps-twitter').attr('data-text', 'I need to do ' + getWholeNumber(twentySitups) + ' sit-ups in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    $('.situps-fb').attr('data-href', 'https://work-off-your-dinner.firebaseapp.com/?fbimage=fb-share-situps&title=It will take ' + getWholeNumber(twentySitups) + ' situps to work off my feast!');

    $('.squats').text(getWholeNumber(twentySquats));
    $('.squats-twitter').attr('data-url', 'https://work-off-your-dinner.firebaseapp.com/?twimage=tw-share-squats');
    $('.squats-twitter').attr('data-text', 'I need to do ' + getWholeNumber(twentySquats) + ' squats in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    $('.squats-fb').attr('data-href', 'https://work-off-your-dinner.firebaseapp.com/?fbimage=fb-share-squats&title=It will take ' + getWholeNumber(twentySquats) + ' squats to work off my feast!');

    $('.run').text(getWholeNumber(runningMile) + "mls");
    $('.running-twitter').attr('data-url', 'https://work-off-your-dinner.firebaseapp.com/?twimage=tw-share-running');
    $('.running-twitter').attr('data-text', 'I need to run ' + getWholeNumber(runningMile) + ' miles in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    $('.running-fb').attr('data-href', 'https://work-off-your-dinner.firebaseapp.com/?fbimage=fb-share-running&title=I will need to run ' + getWholeNumber(runningMile) + ' miles to work off my feast!');
    
    $('.cycling').text(getWholeNumber(cyclingMile) + "mls");
    $('.cycling-twitter').attr('data-url', 'https://work-off-your-dinner.firebaseapp.com/?twimage=tw-share-cycling');
    $('.cycling-twitter').attr('data-text', 'I need to cycle ' + getWholeNumber(cyclingMile) + ' miles in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    $('.cycling-fb').attr('data-href', 'https://work-off-your-dinner.firebaseapp.com/?fbimage=fb-share-cycling&title=I will need to cycle ' + getWholeNumber(cyclingMile) + ' miles to work off my feast!');
    
    $('.walk').text(getWholeNumber(walkingMile) + "mls");
    $('.walking-twitter').attr('data-url', 'https://work-off-your-dinner.firebaseapp.com/?twimage=tw-share-walking');
    $('.walking-twitter').attr('data-text', 'I need to walk ' + getWholeNumber(walkingMile) + ' miles in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    $('.walking-fb').attr('data-href', 'https://work-off-your-dinner.firebaseapp.com/?fbimage=fb-share-walking&title=I will need to walk ' + getWholeNumber(walkingMile) + ' miles to work off my feast!');
    
    $('.rowing').text(getWholeNumber(rowingMile) + "mls");
    $('.rowing-twitter').attr('data-url', 'https://work-off-your-dinner.firebaseapp.com/?twimage=tw-share-rowing');
    $('.rowing-twitter').attr('data-text', 'I need to row ' + getWholeNumber(rowingMile) + ' miles in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    $('.rowing-fb').attr('data-href', 'https://work-off-your-dinner.firebaseapp.com/?fbimage=fb-share-rowing&title=I will need to row ' + getWholeNumber(rowingMile) + ' miles to work off my feast!');
    
    $('.sex').text(getWholeNumber(sexMinute) + "min");
    $('.sex-twitter').attr('data-url', 'https://work-off-your-dinner.firebaseapp.com/?twimage=tw-share-sex');
    $('.sex-twitter').attr('data-text', 'I need to have moderate sex for ' + getWholeNumber(sexMinute) + ' minutes in order to work off ' + totalCal + ' calories from yesterdays blow out… Check yours out at');
    $('.sex-fb').attr('data-href', 'https://work-off-your-dinner.firebaseapp.com/?fbimage=fb-share-sex&title=I will need to have moderate sex for ' + getWholeNumber(sexMinute) + ' minutes to work off my feast!');
});