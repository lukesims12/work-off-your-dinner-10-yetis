$(document).ready(function() {

    const params = new URLSearchParams(window.location.search)
    const totalCal = parseInt(params.get('totalCal'));
    
    // ### SLIDE ANIMATION FOR OPTIONS ### //
    
    $(".option").click(function() {

        let clicks = $(this).data('clicks');

        if  ($(this).data('clicks')) {
            $(this).find('.inner-option-div').addClass("on");
            $(this).animate({ right: '50px' });
            $(this).find('.inner-option-div').animate({ left: '150px' });  
        }
        // } else {
        //     $(this).animate({ right: '0px' }); 
        //     $(this).find('.inner-option-div').animate({ left: '50px' });  
        // }
        $(this).data("clicks", !clicks)

        const cusineID = $(this).attr('data-id');
        $('#cusine-form').attr('action', './eat-2.html?totalCal=' + totalCal + '&id=' + cusineID )
    
    });
     

    $(".btn-cancel").click(function(e) {
        
        if ($(this).closest('.inner-option-div').hasClass("on")) {
            $(this).closest('.inner-option-div').removeClass("on");
            $(this).closest('.option').animate({ right: '0px' }).promise().then(function(){console.log("")}); 
            $(this).closest('.inner-option-div').animate({ left: '50px' }).promise().then(function(){console.log("")});  
        }

    });

});
