var nanoajax = require('nanoajax');

var CardRepository = {

  save: function(body) {
    nanoajax.ajax({
        url: '/card',
        method: 'POST',
        body: {body: body}
      },
      function() {
        console.log('yeah?');
      }
    );
  }

};

module.exports = CardRepository;
