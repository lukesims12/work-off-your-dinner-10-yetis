    // ### INITIALISE VARIABLES ### //
    let counter;
    let inputNum = 1;
    let html = ``;
    
    // ### GET DRINK DATA FROM JSON FILE ### //
    // $.getJSON("./assets/json/drinks.json", function(data) {

    //     const numOptions = parseInt(data.options.length) - 1;
    //     const numOptionRows = Math.ceil((parseInt(data.options.length) / 3 ));
    //     html += `<div class="option-text-div">`;
    //     html += `   <h1 id="option-text">What did you <span id="key-text">drink?</span></h1>`;
    //     html += `</div>`;
    //     $("#drink-container").append(displayLayout(numOptionRows, numOptions, "drink"));

    //     $.each(data.options , function( index ) {
    //         $(".drink-name" + data.options[index].id).append(data.options[index].name);
    //         $(".drink-pic" + data.options[index].id).css("background-image", "url('" + data.options[index].link + "')");
    //     });

    // });

    // ### DISPLAY CUSINE TYPES ### //
    $.getJSON("./assets/json/cusine-types.json", function(data) {

        const numOptions = parseInt(data.options.length) - 1;
        const numOptionRows = Math.ceil((parseInt(data.options.length) / 3 ));
        html += `<div class="option-text-div">`;
        html += `   <h1 id="option-text">What did you <span id="key-text">eat?</span></h1>`;
        html += `</div>`;
        $("#cusine-container").append(displayLayout(numOptionRows, numOptions, "cusine"));

        $.each(data.options , function( index ) {
            $('.option-' + data.options[index].id).attr('data-name', data.options[index].name.toLowerCase().replace(" ", "-"))
            $(".cusine-name" + data.options[index].id).append(data.options[index].name);
            $(".cusine-pic" + data.options[index].id).css("background-image", "url('" + data.options[index].link + "')");
        });

    });

    // ### GET SELECTED DATA FROM JSON FILE ### //
    //change selected option to $(this).val() when click event fires to load correct JSON FILE 

    // ### FORMAT OUTPUT FOR HTML ### //
    function displayLayout( numberOfRows, numberOfOptions, type) {
        counter = 0;

        for (let i = 0; i < numberOfRows; i++) {
            //console.log(counter);
            //console.log(numberOfOptions);
            html += `<div class="option-container-${i + 1}">
                <div></div>`;
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1}" data-clicks="true">`
                    html += `   <div class="outer-option">`;
                    html += `    <div class="option-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div" style="background-color: #EBBA16">`;
                    html += `       <button type="button" class="btn-cancel"><img class="btn-cancel-img" src="./assets/img/cancel-btn.png"/></button`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn"><img class="arrow arrow-up" src="./assets/img/triangle.png" onclick="increment(${counter})"></button>`;
                        html += `       <input type="text" class="num num-${counter}" name="num" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1}" data-clicks="true">`
                    html += `   <div class="outer-option">`;
                    html += `    <div class="option-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div" style="background-color: #EBBA16">`;
                    html += `       <button type="button" class="btn-cancel"><img class="btn-cancel-img" src="./assets/img/cancel-btn.png"/></button`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn"><img class="arrow arrow-up" src="./assets/img/triangle.png" onclick="increment(${counter})"></button>`;
                        html += `       <input type="text" class="num num-${counter}" name="num" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1}" data-clicks="true">`
                    html += `   <div class="outer-option">`;
                    html += `    <div class="option-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div" style="background-color: #EBBA16">`;
                    html += `       <button type="button" class="btn-cancel"><img class="btn-cancel-img" src="./assets/img/cancel-btn.png"/></button`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn"><img class="arrow arrow-up" src="./assets/img/triangle.png" onclick="increment(${counter})"></button>`;
                        html += `       <input type="text" class="num num-${counter}" name="num" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
            html += `<div></div>
            </div>`;
        }
        return html;
    }


    function increment(num) {
        let counter = $('.num-' + num).val();
        counter++;
        $('.num-' + num).val(counter);
    }

    function decrement(num) {
        var counter = $('.num-' + num).val();
        counter--;
        $('.num-' + num).val(counter);
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


        const selectedOption = $(this).attr('data-name');
        const fullPath = `./assets/json/${selectedOption}.json`
        console.log(`./assets/json/${selectedOption}.json`)

        if (selectedOption) {
            $.getJSON(`./assets/json/options.json`, function(data) {
        
                console.log(data.options)
                const numOptions = parseInt(data.options.length) - 1;
                const numOptionRows = Math.ceil((parseInt(data.options.length) / 3 ));
                html += `<div class="option-text-div">`;
                html += `   <h1 id="option-text">What did you <span id="key-text">eat?</span></h1>`;
                html += `</div>`;
                $("#option-container").append(displayLayout(numOptionRows, numOptions, "option"));
        
                $.each(data.options , function( index ) {
                    $('.option-' + data.options[index].id).attr('data-name', data.options[index].name.toLowerCase().replace(" ", "-"))
                    $(".option-name" + data.options[index].id).append(data.options[index].name);
                    $(".option-pic" + data.options[index].id).css("background-image", "url('" + data.options[index].link + "')");
                });
    
            });
        }

    });
    
    $(".btn-cancel").click(function(e) {
        
        if ($(this).closest('.inner-option-div').hasClass("on")) {
            $(this).closest('.inner-option-div').removeClass("on");
            $(this).closest('.option').animate({ right: '0px' }).promise().then(function(){console.log("Done animating2")}); 
            $(this).closest('.inner-option-div').animate({ left: '50px' }).promise().then(function(){console.log("Done animating3")});  
        }

    });

});

