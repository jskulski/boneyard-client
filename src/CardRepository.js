var nanoajax = require('nanoajax');
var urls = require('../config/urls');

var CardRepository = {

  retrieve: function() {
    nanoajax.ajax(urls.CARDS_ENDPOINT);
  },

  save: function(body) {
    nanoajax.ajax({
        url: urls.CARD_ENDPOINT,
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
