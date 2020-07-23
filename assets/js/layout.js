// ### INITIALISE VARIABLES ### //
let counter;
let html = ``;

// ### FORMAT OUTPUT FOR HTML ### //
const displayLayout = (numberOfRows, numberOfOptions, type)  => {
    counter = 0;

    if (window.matchMedia('(max-width: 767px)').matches) {

        for (let i = 0; i < numberOfRows+1; i++) {
            html += `<div class="option-container option-container-${i + 1}">`;
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1} ${(type == "cusine" ? "cusine-option" : "" )}" data-clicks="true">`
                    html += `   <div class="outer-option ${type} ${type}-${counter}" data-clicks="true">`;
                    html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div">`;
                    html += `       <button type="button" data-numval="${counter}" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                        html += `       <input type="number" min="0" data-counter="${counter}" oninput="isNegative()" class="num num-${counter}" name="num-${counter}" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1} ${(type == "cusine" ? "cusine-option" : "" )}" data-clicks="true">`
                    html += `   <div class="outer-option ${type}" data-clicks="true">`;
                    html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div">`;
                    html += `       <button type="button" data-numval="${counter}" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                        html += `       <input type="number" min="0" data-counter="${counter}" oninput="isNegative()" class="num num-${counter}" name="num-${counter}" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
            html += `</div>`;        
        }
    } else if (window.matchMedia('(max-width: 1439px)').matches) {
        for (let i = 0; i < numberOfRows; i++) {
            html += `<div class="option-container option-container-${i + 1}">`;
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1} ${(type == "cusine" ? "cusine-option" : "" )}" data-clicks="true">`
                    html += `   <div class="outer-option ${type} ${type}-${counter}" data-clicks="true">`;
                    html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div">`;
                    html += `       <button type="button" data-numval="${counter}" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                        html += `       <input type="number" min="0" data-counter="${counter}" oninput="isNegative()" class="num num-${counter}" name="num-${counter}" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1} ${(type == "cusine" ? "cusine-option" : "" )}" data-clicks="true">`
                    html += `   <div class="outer-option ${type}" data-clicks="true">`;
                    html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div">`;
                    html += `       <button type="button" data-numval="${counter}" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                        html += `       <input type="number" min="0" data-counter="${counter}" oninput="isNegative()" class="num num-${counter}" name="num-${counter}" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1} ${(type == "cusine" ? "cusine-option" : "" )}" data-clicks="true">`
                    html += `   <div class="outer-option ${type}" data-clicks="true">`;
                    html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div">`;
                    html += `       <button type="button" data-numval="${counter}" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                        html += `       <input type="number" min="0" data-counter="${counter}" oninput="isNegative()" class="num num-${counter}" name="num-${counter}" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
            html += `</div>`;        
        }
    } else {
        for (let i = 0; i < numberOfRows; i++) {
            html += `<div class="option-container option-container-${i + 1}">`;
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1} ${(type == "cusine" ? "cusine-option" : "" )}" data-clicks="true">`
                    html += `   <div class="outer-option ${type} ${type}-${counter}" data-clicks="true">`;
                    html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div">`;
                    html += `       <button type="button" data-numval="${counter}" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                        html += `       <input type="number" min="0" data-counter="${counter}" oninput="isNegative()" class="num num-${counter}" name="num-${counter}" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1} ${(type == "cusine" ? "cusine-option" : "" )}" data-clicks="true">`
                    html += `   <div class="outer-option ${type}" data-clicks="true">`;
                    html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div">`;
                    html += `       <button type="button" data-numval="${counter}" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                        html += `       <input type="number" min="0" data-counter="${counter}" oninput="isNegative()" class="num num-${counter}" name="num-${counter}" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1} ${(type == "cusine" ? "cusine-option" : "" )}" data-clicks="true">`
                    html += `   <div class="outer-option ${type}" data-clicks="true">`;
                    html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div">`;
                    html += `       <button type="button" data-numval="${counter}" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                        html += `       <input type="number" min="0" data-counter="${counter}" oninput="isNegative()" class="num num-${counter}" name="num-${counter}" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1} ${(type == "cusine" ? "cusine-option" : "" )}" data-clicks="true">`
                    html += `   <div class="outer-option ${type}" data-clicks="true">`;
                    html += `    <div class="option-pic ${type}-pic ${type}-pic${counter}"></div>  `;
                    html += `    <div class="option-name-div">`;
                    html += `        <div class="option-name ${type}-name${counter}"></div>`;
                    html += `    </div>`;
                    html += `   </div>`;
                    html += `   <div class="inner-option-div">`;
                    html += `       <button type="button" data-numval="${counter}" class="btn-cancel btn-cancel${counter}"><img class="btn-cancel-img" src="./assets/img/cancel-btn-min.png"/></button>`;
                    if (type == "cusine") {
                        html += `       <span><img class="tick-img" src='./assets/img/tick-min.png'/></span>`;
                    } else {
                        html += `       <button type="button" class="arrow-up-btn" onclick="increment(${counter})"><img class="arrow arrow-up" src="./assets/img/triangle-min.png"></button>`;
                        html += `       <input type="number" min="0" data-counter="${counter}" oninput="isNegative()" class="num num-${counter}" name="num-${counter}" value="0" />`;
                        html += `       <button type="button" class="arrow-down-btn"><img class="arrow arrow-down" src="./assets/img/triangle-min.png" onclick="decrement(${counter})"></button>`;
                    }
                    html += `   </div>`;
                    html += `</div>`;                
                }
                html += `</div>`;        
            }
        }
        if (type != "drink" && type != "nalc") {
            html += `<footer id="main-footer">`;
            html += `    <a class="alertr-link" target="_blank" href="https://alertr.co.uk/">brought to you by <img class="alertr-logo" src="./assets/img/AlertrLogo-Rectangle.png" alt="alertr"></a>`;
            html += `</footer>`;
        }
    return html;
}

let grandtotal = 0;

const increment = (num) => {
    let total = 0;

    let counter = $('.num-' + num).val();
    counter++;
    $('.num-' + num).val(counter);
        
    total = 1 * parseInt($('.num-' + num).attr('data-calories'))
    grandtotal = grandtotal + total;

    $('#totalCalories').val(grandtotal);
}

const decrement = (num) => {
    let total = 0;

    if (parseInt($('.num-' + num).val()) === 0) {
        $(this).val(0);
    } else {
        let counter = $('.num-' + num).val();
        counter--;
        $('.num-' + num).val(counter);
        total = parseInt($('.num-' + num).attr('data-calories')) 
        grandtotal = $('#totalCalories').val() - total;
    
        $('#totalCalories').val(grandtotal);
    }

}
