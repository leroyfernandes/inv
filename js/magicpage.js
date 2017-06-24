$(document).ready(function(){

	$('table .magic-symbol').popover({html: true});

	$('table').on('click', '.popover-content', function(){
		var url = $(this).attr('href'); 
    	window.open(url, '_blank');
	});

	/* Highlight all instances of the clicked symbol */
	$('table').on('click', '.magic-symbol', function(){
		var me = this;
		var thisText = $(me).text();
		var symClass = '.class-'+thisText;

		if( !($(me).hasClass('selected-symbol-highlight')) ){
			$('table .magic-symbol').removeClass('selected-symbol-highlight');
			$(symClass).addClass('selected-symbol-highlight');
		}else{
			$('table .magic-symbol').removeClass('selected-symbol-highlight');
		}
		
	});
})