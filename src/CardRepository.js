var nanoajax = require('nanoajax');
var urls = require('../config/Urls');

var CardRepository = {

  save: function(body) {
    nanoajax.ajax({
        url: urls.NEW_CARD_ENDPOINT,
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
