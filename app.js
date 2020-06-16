    // ### INITIALISE VARIABLES ### //
    let counter;
    let inputNum = 1;
    let html = ``;
    
    // ### GET DRINK DATA FROM JSON FILE ### //
    $.getJSON("./assets/json/drinks.json", function(data) {
        $.each(data, function( i ) {
            // name of each drink
            // console.log(data[0].options[i].name);
            // individual amount of boxes needed
            const numOptions = parseInt(data[0].options.length) ;
            const numOptionRows = Math.ceil((parseInt(data[0].options.length) / 3 ) );
            $("#option-container").append(displayLayout(numOptionRows, numOptions));
            // console.log(numOptionRows);
            // console.log(data[0].options.length);
            
            //$(".option-name" + data[0].options[i].id).html(data[0].options[i].name);
        });
    });

    // ### GET SELECTED DATA FROM JSON FILE ### //
    // change selected option to $(this).val() when click event fires to load correct JSON FILE 
    const selectedOption = "coffee";
    $.getJSON(`./assets/json/${selectedOption}.json`, function(data) {
        $.each(data, function( i ) {
            // name of each drink
            // console.log(data[0].options[i].name);
            // individual amount of boxes needed
            const numOptions = parseInt(data[0].options.length) - 1;
            const numOptionRows = Math.ceil((parseInt(data[0].options.length) / 3 ) );
            // $("#option-container").append(displayLayout(numOptionRows, numOptions));
            // console.log(numOptionRows);
            //console.log(data[0].options.length);
            //console.log('options');
            
            //$(".option-name" + data[0].options[i].id).html(data[0].options[i].name);
        });
    });

    // ### FORMAT OUTPUT FOR HTML ### //
    function displayLayout( numberOfRows, numberOfOptions ) {
        counter = 0;

        for (let i = 0; i < numberOfRows; i++) {
            //console.log(counter);
            //console.log(numberOfOptions);
            
            html += `<div class="option-container-${i + 1}">
                <div></div>`;
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1}" data-clicks="true">`
                    html += `   <div class="outer-option">`;
                    html += `    <img class="option-pic" src="./assets/img/next-btn.png"/>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name option-name1">`;
                    html += `           OUTER`;
                    html += `        </div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div" style="background-color: #EBBA16">`;
                    html += `       <img class="btn-cancel" src="./assets/img/cancel-btn.png"/>`;
                    html += `       <button type="button" class="arrow-up-btn"><img class="arrow arrow-up" src="./assets/img/triangle.png" onclick="increment()"></button>`;
                    html += `       <input type="text" class="num num-${counter += 1}" name="num" value="1" />`;
                    html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle.png" onclick="decrement()"></button>`;
                    html += `   </div>`;
                    html += `</div>`;                
                }
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1}" data-clicks="true">`
                    html += `   <div class="outer-option">`;
                    html += `    <img class="option-pic" src="./assets/img/next-btn.png"/>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name option-name1">`;
                    html += `           OUTER`;
                    html += `        </div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div" style="background-color: #EBBA16">INNER</div>`;
                    html += `</div>`;                
                }
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1}" data-clicks="true">`
                    html += `   <div class="outer-option">`;
                    html += `    <img class="option-pic" src="./assets/img/next-btn.png"/>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name option-name1">`;
                    html += `           OUTER`;
                    html += `        </div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div" style="background-color: #EBBA16">INNER</div>`;
                    html += `</div>`;                
                }
            html += `<div></div>
            </div>`;
        }
        return html;
    }


    function increment() {
        let counter = $('.num').val();
        counter++;
        $('.num').val(counter);
    }

    function decrement() {
        var counter = $('.num').val();
        counter--;
        $('.num').val(counter);
    }


$(document).ready(function() {

    // ### INITIALISE PARRALAX SCROLLING ### //
    $(".burger-img").enllax();
    $(".coke-img").enllax();        

    // ### SLIDE ANIMATION FOR OPTIONS ### //
    $(".option").click(function(e) {
        let clicks = $(this).data('clicks');

        if  ($(this).data('clicks')) {
            $(this).find('.inner-option-div').addClass("on");
            $(this).animate({ right: '50px' }).promise().then(function(){console.log("Done animating")});
            $(this).find('.inner-option-div').animate({ left: '150px' }).promise().then(function(){console.log("Done animating")});  
        }
        // } else {
        //     $(this).animate({ right: '0px' }); 
        //     $(this).find('.inner-option-div').animate({ left: '50px' });  
        // }
        $(this).data("clicks", !clicks);
    });
    
    $(".btn-cancel").click(function(e) {
        
        if ($(this).closest('.inner-option-div').hasClass("on")) {
            $(this).closest('.inner-option-div').removeClass("on");
            $(this).closest('.option').animate({ right: '0px' }).promise().then(function(){console.log("Done animating2")}); 
            $(this).closest('.inner-option-div').animate({ left: '50px' }).promise().then(function(){console.log("Done animating3")});  
        }

    });

});

