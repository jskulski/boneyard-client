var nanoajax = require('nanoajax');
var url = require('url');

var urls = require('../config/urls');

var CardRepository = {

  retrieve: function() {
    nanoajax.ajax(urls.CARDS_ENDPOINT, function() {
      console.log('hey');
    });
  },

  save: function(body) {
    nanoajax.ajax({
        url: urls.CARD_ENDPOINT,
        method: 'POST',
        body: "body=" + body
      },
      function() {


      }
    );
  }

};

module.exports = CardRepository;
