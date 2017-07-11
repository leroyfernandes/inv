$(document).ready(function(){

	$('table .magic-symbol').popover({html: true, placement: 'left auto'});

	$('table').on('click', '.popover-content', function(){
		var url = $(this).attr('href'); 
    	window.open(url, '_blank');
	});

	/* Highlight all instances of the clicked symbol */
	$('table').on('click', '.magic-symbol', function(){
		var me = this;
		var thisText = $(me)[0].innerText;
		var symClass = '.class-'+thisText;

		if( !($(me).hasClass('selected-symbol-highlight')) ){
			$('table .magic-symbol').removeClass('selected-symbol-highlight');
			$(symClass).addClass('selected-symbol-highlight');
		}else{
			$('table .magic-symbol').removeClass('selected-symbol-highlight');
		}
	});

	/*
	* Calculate percentage of Sectors and attach to legend
	*/
	var sectorPercent = function(){
		var magic_symbols = $('div.magic-symbol'),
		magic_symbols_length = magic_symbols.length,
		magic_sectors = [];
		magic_symbols.each(function(){
			magic_sectors.push($(this).data('sector'));
		});

		var percentObject = magic_sectors.reduce(function(ob, curr){
			if (typeof ob[curr] == 'undefined') {
				ob[curr] = 1;
			} else {
				ob[curr] += 1;
			}

			return ob;
		}, {});

		Object.keys(percentObject).forEach(function(i){
			console.log(i);
			var sector = '.sector-legend .'+i;
			$(sector).parent('.sector-tile').find('.sector-name').append(' ('+((percentObject[i]/magic_symbols_length)*100).toFixed(2)+'%) ');
		});
	}();

	/*
	* mean reversion
	*/



})