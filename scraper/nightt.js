var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

nightmare
	.goto('https://www.magicformulainvesting.com/Account/LogOn')
	.type('input[id="Email"]', 'buffettology9@gmail.com')
	.type('input[id="Password"]', 'greenblight99')
	.click('input#login')
	.wait(3000)
	.then(function(){
		var urls = ['400', '500', '750'];
		urls.reduce(function(accumulator, url) {
			return accumulator.then(function(results) {
				return nightmare
					.wait('input#MinimumMarketCap')
					.type('input#MinimumMarketCap', '')
					.type('input#MinimumMarketCap', url)
					.click('input#stocks')
					.wait(3000)
					.wait('div#tableform')
					.evaluate( function() {
						var list = '';
						var marcap = $('#MinimumMarketCap').val();
						var date = new Date();
						var fullYear = date.getFullYear();
						$('#tableform table tr').each(function(i){ 
							$(this).find('td[align=center]').each(function(j){
								if(j==0){}
								if(j==1){ 
									$this = $(this);
									var x = parseInt( $this.text().replace(',',''), 10 );
									$this.text(x);
								}
								if(j==2){
									$this = $(this);
									var x = fullYear + $this.text().replace('/',''); 
									$this.text(x); 
								}
								if(j==3){
									$this = $(this);
									var year = $this.text().split('/')[0] == 12 ? fullYear-1 : fullYear; 
									var x = year+$this.text().replace('/',''); 
									$this.text(x); 
								}
								list += $(this).text() + ',';
							}); 
							list += (marcap)+','+i+','+'\n'; 
						});
						return result
					})
					.then(function(result){
						results.push(result);
						return results;
					});
			});
		}, Promise.resolve([])).then(function(results){
				console.dir(results);
		});
	})
	.wait(60000)
	.end()
	.then()
	.catch(function (error) {
    console.error('Search failed:', error);
  });