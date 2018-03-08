var TNG = (function (name) {return name;}( TNG || {}));

TNG.FullForm = ( function () {

    var init = function() {
    	
        $('ul.tabs li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		})

		$('ul.tabs-responsive li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs-responsive li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		})

    
    };

    return {
        init: init
    }

})();

$(document).ready(function() { 
 console.log('full-form.js: document is ready.');
//  $(window).load( function() {
//    console.log('schedule-a.js: window has loaded');
     
    TNG.FullForm.init();    
});

