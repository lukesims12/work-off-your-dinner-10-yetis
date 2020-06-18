$(document).ready(function() {

    const params = new URLSearchParams(window.location.search)
    const totalCal = parseInt(params.get('totalCal'));
    
    if (window.matchMedia('(max-width: 768px)').matches) {

        $(document).on("click", ".option", function() {

            $(this).find('.inner-option-div').addClass("on");
            //$(this).find('.option-pic').delay(100).css('visibility', 'hidden');
            $('.inner-option-div').css('background-color', 'transparent');
            $(this).find('.num').delay(100).show();
            $(this).find('.arrow-up-btn').delay(100).show();
            $(this).find('.arrow-down-btn').delay(100).show();
            $(this).find('.option-pic').delay(100).css('z-index', '0');
            $(this).find('.inner-option-div').show();

            const cusineID = $(this).attr('data-id');
            $('#cusine-form').attr('action', './eat-2.html?totalCal=' + totalCal + '&id=' + cusineID )
        
        });
        
    } else {

        // ### SLIDE ANIMATION FOR OPTIONS ### //
        $(document).on("click", ".option", function() {
        
            $(this).find('.inner-option-div').addClass("on");
            $(this).animate({ right: '50px' });
            $(this).find('.inner-option-div').animate({ left: '150px' });

            const cusineID = $(this).attr('data-id');
            $('#cusine-form').attr('action', './eat-2.html?totalCal=' + totalCal + '&id=' + cusineID )
        
        });
        
        $(document).on("click", ".btn-cancel", function() {
            
            if ($(this).closest('.inner-option-div').hasClass("on")) {
                $(this).closest('.inner-option-div').removeClass("on");
                $(this).closest('.inner-option-div').addClass("exit-left");
                $(this).closest('.option').addClass("exit-right");
                $(this).addClass('exit-left');

            }
        });
            

    }
    
});

