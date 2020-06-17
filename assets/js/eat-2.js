// ### DISPLAY CUSINE TYPES ### //
$.getJSON(`./assets/json/options.json`, function(data) {

    const params = new URLSearchParams(window.location.search)
    const selectedOption = parseInt(params.get('id'));
    html = '';
    //const selectedOption = $(this).attr('data-id');

    console.log(selectedOption)
    const numOptions = parseInt(data[selectedOption].options.length) - 1;
    const numOptionRows = Math.ceil((parseInt(data[selectedOption].options.length) / 3 ));
    html += `<div class="option-text-div">`;
    html += `   <h1 id="option-text">What did you <span id="key-text">eat?</span></h1>`;
    html += `</div>`;
    $("#option-container").append(displayLayout(numOptionRows, numOptions, "option-test"));

    $.each(data[selectedOption].options , function( index ) {
        console.log(data[selectedOption].options[index].id)
        $(".option-test-name" + data[selectedOption].options[index].id).append(data[selectedOption].options[index].name);
        $(".option-test-pic" + data[selectedOption].options[index].id).css("background-image", "url('" + data[selectedOption].options[index].link + "')");
    });
});

$('.next-btn').click(function() {
    $('#option-form').submit();
});
