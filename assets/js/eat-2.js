const params = new URLSearchParams(window.location.search)
const selectedOption = parseInt(params.get('id'));
const totalCal = (params.get('totalCal')) ? parseInt(params.get('totalCal')) : 0;

if (selectedOption == 20) {
    window.location.replace('./snack.html?totalCal=' + totalCal)
} else {
    // ### DISPLAY FOOD OPTIONS ### //
    $.getJSON(`./assets/json/options.json`, function(data) {
    
        html = '';
    
        const numOptions = parseInt(data[selectedOption].options.length) - 1;
        const numOptionRows = Math.ceil((parseInt(data[selectedOption].options.length) / 3 ));
        html += `<div class="option-text-div">`;
        html += `   <h1 id="option-text">What did you <span id="key-text">eat?</span></h1>`;
        html += `</div>`;
        $("#option-container").append(displayLayout(numOptionRows, numOptions, "option-test"));
    
        $.each(data[selectedOption].options , function( index ) {
            $('.num-' + data[selectedOption].options[index].id).attr('data-calories', parseInt(data[selectedOption].options[index].calories))
            $(".option-test-name" + data[selectedOption].options[index].id).append(data[selectedOption].options[index].name);
            $(".option-test-pic" + data[selectedOption].options[index].id).css("background-image", "url('" + data[selectedOption].options[index].link + "')");
        });
    
        
    });
    
    $('.next-btn').click(function() {
        $('#main-section').css('position', 'relative');
        $('#main-section').animate({left: '-2000px'}, 600);
        setTimeout(function() {
            const finalTotal = (totalCal + parseInt($('#totalCalories').val()))
            $('#option-form').attr('action', './snack.html?totalCal=' + finalTotal)
            $('#option-form').submit();
        }, 350);
    });
    
    $('.site-logo-link').click(function() {
        $('#main-section').css('position', 'relative');
        $('#main-section').animate({left: '2000px'}, 600);
    
        setTimeout(function() {
            window.history.back();
        }, 350);
    });
    
}
