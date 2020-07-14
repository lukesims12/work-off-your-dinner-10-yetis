$(document).ready(function() {

    const params = new URLSearchParams(window.location.search)
    const totalCal = parseInt(params.get('totalCal'));
    
    if (window.matchMedia('(max-width: 768px)').matches) {

        $(document).on("click", ".option", function() {
            if ($(this).hasClass('None')) {
                $('.option-pic').css('border', 'none');
                $(this).find('.inner-option-div').addClass("on");
                $('.inner-option-div').css('background-color', 'transparent');
                $(this).find('.option-pic').css('border', 'solid 6px #edba00');
                $(this).find('.option-pic').css('z-index', '0');
                $(this).find('.inner-option-div').hide();
                $(this).append('<span><img class="tick-img" src="./assets/img/green-tick.png"/></span>');
                $(this).find('.num').hide();
                $(this).find('.arrow-up-btn').hide();
                $(this).find('.arrow-down-btn').hide();
            } else {
                $('.option-pic').css('border', 'none');
                $(this).find('.inner-option-div').addClass("on");
                $('.inner-option-div').css('background-color', 'transparent');
                $(this).find('.option-pic').css('border', 'solid 6px #edba00');
                $(this).find('.option-pic').css('z-index', '0');
                $(this).find('.inner-option-div').show();
                $(this).find('.num').show();
                $(this).find('.arrow-up-btn').show();
                $(this).find('.arrow-down-btn').show();
            }

            const cusineID = $(this).attr('data-id');
            $('#cusine-form').attr('action', './eat-2.html?totalCal=' + totalCal + '&id=' + cusineID )
        
        });
        
    } else {

        // ### SLIDE ANIMATION FOR OPTIONS ### //
        if ($('.option').hasClass('cusine-option')) {
            $(document).on("click", ".cusine-option", function(e) {
                
                $('.option').css('right', 0);
                $('.inner-option-div').css('left', 0);

                $(this).addClass('food-chosen');
                $(this).removeClass("exit-right");
                $(this).find('.inner-option-div').removeClass('exit-left');
                $(this).find('.btn-cancel').removeClass('exit-left');
                $(this).find('.inner-option-div').addClass("on");
                $(this).animate({ right: '50px' });
                $(this).find('.inner-option-div').animate({ left: '150px' });
    
                const cusineID = $(this).attr('data-id');
                $('#cusine-form').attr('action', './eat-2.html?totalCal=' + totalCal + '&id=' + cusineID )
                
            });
        } else {
            $(document).on("click", ".option", function() {

                if ($(this).hasClass('None')) {
                    $(this).removeClass("exit-right");
                    $(this).find('.inner-option-div').removeClass('exit-left');
                    $(this).find('.btn-cancel').removeClass('exit-left');
                    $(this).find('.inner-option-div').addClass("on");
                    $(this).animate({ right: '50px' });
                    $(this).find('.inner-option-div').animate({ left: '150px' });
                    $(this).find('.inner-option-div').append('<span><img class="tick-img" src="./assets/img/tick-min.png"/></span>');
                    $(this).find('.option-pic').css('border', 'none');
                    $(this).find('.num').hide();
                    $(this).find('.arrow-up-btn').hide();
                    $(this).find('.arrow-down-btn').hide();    
                } else {
                    $(this).removeClass("exit-right");
                    $(this).find('.inner-option-div').removeClass('exit-left');
                    $(this).find('.btn-cancel').removeClass('exit-left');
                    $(this).find('.inner-option-div').addClass("on");
                    $(this).animate({ right: '50px' });
                    $(this).find('.inner-option-div').animate({ left: '150px' });
                    $(this).find('.option-pic').css('border', 'none');
                }
                let numVal = $(this).find('.num').attr('data-counter');
                //increment(numVal);

                console.log($('#totalCalories').val())
    
                const cusineID = $(this).attr('data-id');
                $('#cusine-form').attr('action', './eat-2.html?totalCal=' + totalCal + '&id=' + cusineID )
            
                return false;
            });
        }
        
        $(document).on("click", ".btn-cancel", function() {
            
            if ($(this).closest('.inner-option-div').hasClass("on")) {

                const numval = $(this).attr('data-numval');

                $(this).closest('.inner-option-div').removeClass("on");
                $(this).closest('.inner-option-div').addClass("exit-left");
                $(this).closest('.option').addClass("exit-right");
                $(this).closest('.option').removeClass("food-chosen");
                $(this).addClass('exit-left');
                let updatedCalories = (parseInt($('.num-' + numval).attr('data-calories')) * parseInt($('.num-' + numval).val()));
                let newTotal = parseInt($('#totalCalories').val()) - parseInt(updatedCalories);
                grandtotal = 0;
                $('#totalCalories').val(newTotal)
                $('.num-' + numval).val(0)
                console.log(updatedCalories)
                console.log(newTotal)

            }
            return false;

        });
            

    }
    
});
