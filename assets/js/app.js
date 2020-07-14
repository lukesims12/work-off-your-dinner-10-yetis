// ### GET ALCOHOLIC DRINK DATA FROM JSON FILE ### //
$.getJSON("./assets/json/alcoholic-drinks.json", function(data) {

    const numOptions = parseInt(data.options.length) - 1;
    const numOptionRows = Math.ceil((parseInt(data.options.length) / 3 ));
    html += `<div id="top" class="option-text-div">`;
    html += `   <h1 id="option-text">What did you <span id="key-text">drink?</span></h1>`;
    html += `</div>`;
    html += `   <h3 class="drink-header">ALCOHOLIC DRINKS</span></h3>`;
    html += `   <div class="underline"></div>`;
    $("#alc-container").append(displayLayout(numOptionRows, numOptions, "drink"));
    
    $.each(data.options , function( index ) {
        $('.num-' + data.options[index].id).attr('data-calories', parseInt(data.options[index].calories))
        $('.option-' + data.options[index].id).addClass(data.options[index].name)
        $(".drink-name" + data.options[index].id).append(data.options[index].name);
        $(".drink-pic" + data.options[index].id).css("background-image", "url('" + data.options[index].link + "')");
    });

    html = '';
});

html = '';

// ### GET NON-ALCOHOLIC DRINK DATA FROM JSON FILE ### //
$.getJSON("./assets/json/non-alcoholic-drinks.json", function(data) {

    const numOptions = parseInt(data.options.length) - 1;
    const numOptionRows = Math.ceil((parseInt(data.options.length) / 3 ));
    html += `   <h3 class="drink-header">NON ALCOHOLIC DRINKS</span></h3>`;
    html += `   <div class="underline"></div>`;
    $("#nalc-container").append(displayLayout(numOptionRows, numOptions, "nalc"));
    
    $.each(data.options , function( index ) {
        $('.num-' + data.options[index].id).attr('data-calories', parseInt(data.options[index].calories))
        $(".nalc-name" + data.options[index].id).append(data.options[index].name);
        $(".nalc-pic" + data.options[index].id).css("background-image", "url('" + data.options[index].link + "')");
    });
    html = '';
});

html = '';

// ### GET COFFEE DATA FROM JSON FILE ### //
$.getJSON("./assets/json/coffee.json", function(data) {

    const numOptions = parseInt(data.options.length) - 1;
    const numOptionRows = Math.ceil((parseInt(data.options.length) / 3 ));
    html += `   <h3 class="drink-header">COFFEE</span></h3>`;
    html += `   <div class="underline"></div>`;
    $("#nalc-container").append(displayLayout(numOptionRows, numOptions, "coffee"));
    
    $.each(data.options , function( index ) {
        $('.num-' + data.options[index].id).attr('data-calories', parseInt(data.options[index].calories))
        $(".coffee-name" + data.options[index].id).append(data.options[index].name);
        $(".coffee-pic" + data.options[index].id).css("background-image", "url('" + data.options[index].link + "')");
    });
    html = '';
});

html = '';

$(document).ready(function() {

    // ### INITIALISE PARRALAX SCROLLING ### //
    $(".burger-img").enllax();
    $(".coke-img").enllax();        

    $('input').attr('data-lpignore', true);

    $('.next-btn').click(function() {
        $('#main-section').css('position', 'relative');
        $('#main-section').animate({left: '-2000px'}, 600);
        setTimeout(function() {
            $('#drink-form').attr('action', './eat.html?totalCal=' + $('#totalCalories').val())
            $('#drink-form').submit();
        }, 350);
    });

    $('.skip-section-btn').click(function() {
        $(this).attr('href', './eat.html')
    });
});
