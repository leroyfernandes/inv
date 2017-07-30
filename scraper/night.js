var winston = require('winston');
var today = new Date();
today = today.toISOString().substring(0, 10).replace(/-/g,"");
var mfifile = 'mfi'+today+'.log';
winston.add(winston.transports.File, { filename: mfifile, level: 'info' });

var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.magicformulainvesting.com/Account/LogOn')
  .type('input[id="Email"]', 'buffettology9@gmail.com')
  .type('input[id="Password"]', 'greenblight99')
  .click('input#login')

  //.type('#search_form_input_homepage', 'github nightmare')
  //.click('#search_button_homepage')
  .wait(3000)
  .wait('input#MinimumMarketCap')
  .type('input#MinimumMarketCap', '')
  .type('input#MinimumMarketCap', '100')
  .click('input#stocks')
  .wait(3000)
  .wait('div#tableform')
  .evaluate( function() {
    var list = '';
    var marcap = $('#MinimumMarketCap').val();
    var date = new Date();
    var fullYear = date.getFullYear();
    $('#tableform table tbody tr').each(function(i){
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
      list += (marcap)+','+(i+1)+','+'\n';
    });
    return list
  })
  .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '200')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '300')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '400')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '600')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '700')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '800')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '900')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '1000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '1250')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '1500')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '1750')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '2000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '2250')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '2500')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '2750')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '3000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '3250')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '3500')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '3750')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '4000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '4250')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '4500')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '4750')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '5000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '5250')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '5500')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '5750')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '6000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '6250')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '6500')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '6750')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '7000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '7250')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '7500')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '7750')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '8000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '8250')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '8500')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '8750')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '9000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '9250')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '9500')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '9750')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '10000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '10500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '11000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '11500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '12000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '12500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '13000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '13500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '14000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '14500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '15000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '15500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '16000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '16500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '17000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '17500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '18000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '18500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '19000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '19500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '20000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '20500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '21000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '21500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '22000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '22500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '23000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '23500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '24000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '24500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '25000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '26000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '27000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '28000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '29000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '30000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '31000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '32000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '33000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '34000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '35000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '36000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '37000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '38000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '39000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '40000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '41000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '42000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '43000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '44000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '45000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '46000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '47000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '48000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '49000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '50000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '52500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '55000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '57500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '60000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '62500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '65000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '67500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '70000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '72500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '75000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '77500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '80000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '82500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '85000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '87500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '90000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '92500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '95000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '97500')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '100000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '105000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '110000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '115000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '120000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '125000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '130000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '135000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '140000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '145000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '150000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '155000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '160000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '165000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '170000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '175000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '180000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '185000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n';
        });
        return list
      })
      .then(function (results) {
    winston.log('info', results);
    nightmare
    .type('input#MinimumMarketCap', '')
    .type('input#MinimumMarketCap', '190000')
    .click('input#stocks')
    .wait(3000)
    .wait('div#tableform')
    .evaluate( function() {
      var list = '';
      var marcap = $('#MinimumMarketCap').val();
      var date = new Date();
      var fullYear = date.getFullYear();
      $('#tableform table tbody tr').each(function(i){ 
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
        list += (marcap)+','+(i+1)+','+'\n';
      });
      return list
    })
    .then(function (results) {
      winston.log('info', results);

      nightmare
      .type('input#MinimumMarketCap', '')
      .type('input#MinimumMarketCap', '200000')
      .click('input#stocks')
      .wait(3000)
      .wait('div#tableform')
      .evaluate( function() {
        var list = '';
        var marcap = $('#MinimumMarketCap').val();
        var date = new Date();
        var fullYear = date.getFullYear();
        $('#tableform table tbody tr').each(function(i){ 
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
          list += (marcap)+','+(i+1)+','+'\n'; 
        });
        return list
      })
      .end()
      .then(function (results) {
        winston.log('info', results);
      })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })
  })
    })

  .catch(function (error) {
    console.error('Search failed:', error);
  });