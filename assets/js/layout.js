// ### INITIALISE VARIABLES ### //
let counter;
let html = ``;

// ### FORMAT OUTPUT FOR HTML ### //
function displayLayout( numberOfRows, numberOfOptions, type) {
    counter = 0;

    for (let i = 0; i < numberOfRows; i++) {
        //console.log(counter);
        //console.log(numberOfOptions);
        html += `<div class="option-container option-container-${i + 1}">`;
            if (numberOfOptions >= counter) {
                html += `<div class="option option-${counter += 1}" data-clicks="true">`
                html += `   <div class="outer-option ${type} ${type}-${counter}" data-clicks="true">`;
                html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                html += `    <div class="option-name-div">`;
                html += `        <div class="option-name ${type}-name${counter}"></div>`;
                html += `    </div>`;
                html += `   </div>`;
                html += `   <div class="inner-option-div">`;
                html += `       <button type="button" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                if (type == "cusine") {
                    html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                } else {
                    html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                    html += `       <input type="text" class="num num-${counter}" name="num-${counter}" value="0"/>`;
                    html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                }
                html += `   </div>`;
                html += `</div>`;                
            }
            if (numberOfOptions >= counter) {
                html += `<div class="option option-${counter += 1}" data-clicks="true">`
                html += `   <div class="outer-option ${type}" data-clicks="true">`;
                html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                html += `    <div class="option-name-div">`;
                html += `        <div class="option-name ${type}-name${counter}"></div>`;
                html += `    </div>`;
                html += `   </div>`;
                html += `   <div class="inner-option-div">`;
                html += `       <button type="button" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                if (type == "cusine") {
                    html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                } else {
                    html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                    html += `       <input type="text" class="num num-${counter}" name="num-${counter}" value="0"/>`;
                    html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                }
                html += `   </div>`;
                html += `</div>`;                
            }
            if (numberOfOptions >= counter) {
                html += `<div class="option option-${counter += 1}" data-clicks="true" >`
                html += `   <div class="outer-option ${type}" data-clicks="true">`;
                html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>`;
                html += `    <div class="option-name-div">`;
                html += `        <div class="option-name ${type}-name${counter}"></div>`;
                html += `    </div>`;
                html += `   </div>`;
                html += `   <div class="inner-option-div">`;
                html += `       <button type="button" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                if (type == "cusine") {
                    html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                } else {
                    html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                    html += `       <input type="text" class="num num-${counter}" name="num-${counter}" value="0"/>`;
                    html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                }
                html += `   </div>`;
                html += `</div>`;                
            }
        html += `</div>`;
    }
    return html;
}

let grandtotal = 0;
const increment = (num) => {
    let total = 0;
    let counter = $('.num-' + num).val();
    
    counter++;
    $('.num-' + num).val(counter);
        
    //console.log(parseInt($('.num-' + num).val()) * parseInt($('.num-' + num).attr('data-calories')))

    total = 1 * parseInt($('.num-' + num).attr('data-calories'))
    grandtotal = grandtotal + total;

    console.log(total)
    console.log(grandtotal)
    $('#totalCalories').val(grandtotal);
}


const decrement = (num) => {
    let total = 0;

    let counter = $('.num-' + num).val();
    counter--;
    $('.num-' + num).val(counter);


    total = parseInt($('.num-' + num).attr('data-calories')) 
    grandtotal = $('#totalCalories').val() - total;
    console.log(total)
    console.log(grandtotal)
    $('#totalCalories').val(grandtotal);

}

