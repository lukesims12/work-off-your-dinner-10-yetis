// ### DISPLAY CUSINE TYPES ### //
$.getJSON("./assets/json/cusine-types.json", function(data) {

    html = '';
    const numOptions = parseInt(data.options.length) - 1;
    const numOptionRows = Math.ceil((parseInt(data.options.length) / 3 ));
    html += `<div class="option-text-div">`;
    html += `   <h1 id="option-text">What did you <span id="key-text">eat?</span></h1>`;
    html += `   <div class="cusine-option-text">Choose <span class="cusine-option-text-ul">one</span> option below:</div>`;
    html += `</div>`;
    $("#cusine-container").append(displayLayout(numOptionRows, numOptions, "cusine"));

    $.each(data.options , function( index ) {
        $('.option-' + data.options[index].id).attr('data-id', parseInt(data.options[index].optionid))
        $(".cusine-name" + data.options[index].id).append(data.options[index].name);
        $(".cusine-pic" + data.options[index].id).css("background-image", "url('" + data.options[index].link + "')");
    });

});

$('.next-btn').click(function() {
    $('#cusine-form').submit();
});
