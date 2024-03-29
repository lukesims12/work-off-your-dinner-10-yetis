const params = new URLSearchParams(window.location.search)
const totalCal = (params.get('totalCal')) ? parseInt(params.get('totalCal')) : 0;

// ### DISPLAY CUSINE TYPES ### //
$.getJSON("./assets/json/cusine-types.json", function(data) {

    html = '';
    const numOptions = parseInt(data.options.length) - 1;
    const numOptionRows = Math.ceil((parseInt(data.options.length) / 3 ));
    html += `<div class="option-text-div">`;
    html += `   <h1 id="option-text">What did you <span id="key-text">eat?</span></h1>`;
    html += `   <div class="cusine-option-text">Choose <span class="cusine-option-text-ul">one</span> option below and you will then be asked about the meal you ate:</div>`;
    html += `</div>`;
    $("#cusine-container").append(displayLayout(numOptionRows, numOptions, "cusine"));

    $.each(data.options , function( index ) {
        $('.option-' + data.options[index].id).attr('data-id', parseInt(data.options[index].optionid))
        $(".cusine-name" + data.options[index].id).append(data.options[index].name);
        $(".cusine-pic" + data.options[index].id).css("background-image", "url('" + data.options[index].link + "')");
    });

});

console.log(totalCal)

$('.next-btn').click(function() {
    $('#main-section').css('position', 'relative');
    $('#main-section').animate({left: '-2000px'}, 600);
    setTimeout(function() {
        $('#cusine-form').submit();
    }, 350);
});
 
$('.skip-section-btn').click(function() {
    $(this).attr('href', './snack.html?totalCal=' + totalCal)
});

$('.site-logo-link').click(function() {
    $('#main-section').css('position', 'relative');
    $('#main-section').animate({left: '2000px'}, 600);

    setTimeout(function() {
        window.history.back();
    }, 350);
});