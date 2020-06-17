    // ### INITIALISE VARIABLES ### //
    let counter;
    let html = ``;
    
    // ### FORMAT OUTPUT FOR HTML ### //
    function displayLayout( numberOfRows, numberOfOptions, type) {
        counter = 0;

        for (let i = 0; i < numberOfRows; i++) {
            //console.log(counter);
            //console.log(numberOfOptions);
            html += `<div class="option-container option-container-${i + 1}">
                <div></div>`;
                if (numberOfOptions >= counter) {
                    html += `<div class="option option-${counter += 1}" data-clicks="true">`
                    html += `   <div class="outer-option ${type} ${type}-${counter}" data-clicks="true">`;
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
                    html += `   <div class="outer-option ${type}" data-clicks="true">`;
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
                    html += `   <div class="outer-option ${type}" data-clicks="true">`;
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



