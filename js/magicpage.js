$(document).ready(function(){

	/* Highlight all instances of the clicked symbol */
	$('table').on('click', 'td.magic-symbol', function(){
		var thisText = $(this).text();
		var symClass = '.class-'+thisText;
		$('table td.magic-symbol').removeClass('selected-symbol-highlight');
		$(symClass).addClass('selected-symbol-highlight');



	});
})