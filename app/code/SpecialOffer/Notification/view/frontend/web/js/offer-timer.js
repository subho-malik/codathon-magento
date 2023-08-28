define(['jquery'],function ($) {
    'use strict';

    return function (config, element) {
        var offerData = config.offerData;
        var startTime = new Date(offerData.start_time).getTime();
		var endTime = new Date(offerData.end_time).getTime();
        var textBeforeTime = '';
        var textAfterTime = '';
        if(new Date().getTime() < startTime || new Date().getTime() > endTime ) {
            $('#special-offer-banner').remove();         
            return;
        }

    	// Run myfunc every second
    	var myfunc = setInterval(function() {

    		var now = new Date().getTime();
    		
    		if(now > startTime)
    		{
        		var timeleft = endTime - now;
    			// Calculating the days, hours, minutes and seconds left
    			var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    			var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    			var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    			var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
                if(offerData.text_before_time != null){ textBeforeTime  = offerData.text_before_time};
                if(offerData.text_after_time != null){ textAfterTime  = offerData.text_after_time};
    			$('#special-offer-banner').html('<p>' + textBeforeTime +' '+ days + " DAYS " + hours + " HOURS " + minutes + 
        			" MINUTES " + seconds + " SECONDS "+ textAfterTime + '</p>');
    			if (timeleft < 0) {
        			clearInterval(myfunc);
        			$('#special-offer-banner').remove();
    			}
    		}
    	}, 1000);
    }
});


