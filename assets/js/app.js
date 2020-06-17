// ### GET DRINK DATA FROM JSON FILE ### //
$.getJSON("./assets/json/drinks.json", function(data) {

    const numOptions = parseInt(data.options.length) - 1;
    const numOptionRows = Math.ceil((parseInt(data.options.length) / 3 ));
    html += `<div class="option-text-div">`;
    html += `   <h1 id="option-text">What did you <span id="key-text">drink?</span></h1>`;
    html += `</div>`;
    $("#drink-container").append(displayLayout(numOptionRows, numOptions, "drink"));

    $.each(data.options , function( index ) {
        $(".drink-name" + data.options[index].id).append(data.options[index].name);
        $(".drink-pic" + data.options[index].id).css("background-image", "url('" + data.options[index].link + "')");
    });

});


$(document).ready(function() {

    // ### INITIALISE PARRALAX SCROLLING ### //
    $(".burger-img").enllax();
    $(".coke-img").enllax();        

    $('.next-btn').click(function() {
        $('#drink-form').submit();
    });

    function loadPage(pageName) {
        document.getElementById("root").innerHTML=`<object type="text/html" data="${pageName}.html" ></object>`;
    }

});
