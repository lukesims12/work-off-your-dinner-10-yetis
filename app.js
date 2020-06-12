$(document).ready(function() {

    // ### INITIALISE VARIABLES ### //
    let counter;
    let html = ``;
    
    // ### INITIALISE PARRALAX SCROLLING ### //
    $(".burger-img").enllax();
    $(".coke-img").enllax();    

    $.getJSON("./assets/json/drinks.json", function(data) {
        $.each(data, function( i ) {
            // name of each drink
            //console.log(data[0].options[i].name);
            // individual amount of boxes needed
            const numOptions = parseInt(data[0].options.length) - 1;
            const numOptionRows = Math.ceil((parseInt(data[0].options.length) / 3 ) );
            $("#option-container").append(displayLayout(numOptionRows, numOptions));
            console.log(numOptionRows);
            console.log(data[0].options.length);
            
            
            $(".option-name" + data[0].options[i].id).html(data[0].options[i].name);
        });
    });


    function displayLayout( numberOfRows, numberOfOptions ) {
        counter = 0;

        for (let i = 0; i < numberOfRows; i++) {
            console.log(counter);
            console.log(numberOfOptions);
            
            html += `<div class="option-container-${i + 1}">
                <div></div>`;
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1}">`;                
                }
            html += `</div>`;
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1}">`;
                }
            html += `</div>`;
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1}">`;
                }
            html += `</div>
                <div></div>
            </div>`;
        }
        return html;
    }

});