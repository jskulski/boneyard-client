var nanoajax = require('nanoajax');
var url = require('url');

var urls = require('../config/urls');

var CardRepository = {

  retrieve: function() {
    var api_url = urls.CARDS_ENDPOINT;
    nanoajax.ajax(api_url);
  },

  save: function(body) {
    nanoajax.ajax({
        url: urls.CARD_ENDPOINT,
        method: 'POST',
        body: {body: body}
      }
    );
  }

};

module.exports = CardRepository;
