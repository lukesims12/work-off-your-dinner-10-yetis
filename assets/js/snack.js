// ### DISPLAY CUSINE TYPES ### //
$.getJSON("./assets/json/snacks.json", function(data) {

    html = '';
    const numOptions = parseInt(data.options.length) - 1;
    const numOptionRows = Math.ceil((parseInt(data.options.length) / 3 ));
    html += `<div class="option-text-div">`;
    html += `   <h1 id="option-text">Any <span id="key-text">snacks?</span></h1>`;
    html += `</div>`;
    $("#snack-container").append(displayLayout(numOptionRows, numOptions, "snack"));

    $.each(data.options , function( index ) {
        $('.option-' + data.options[index].id).attr('data-id', parseInt(data.options[index].optionid))
        $(".snack-name" + data.options[index].id).append(data.options[index].name);
        $(".snack-pic" + data.options[index].id).css("background-image", "url('" + data.options[index].link + "')");
    });

});

$('.next-btn').click(function() {
    $('#snack-form').submit();
});

