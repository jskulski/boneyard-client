var nanoajax = require('nanoajax');

var urls = require('../config/urls');

var CardRepository = {

  retrieve: function() {
    nanoajax.ajax(urls.CARDS_ENDPOINT, function() {
      // CardListRefreshedActionCreator.go();
    });
  },

  save: function(body) {
    nanoajax.ajax({
        url: urls.CARD_ENDPOINT,
        method: 'POST',
        body: "body=" + body
      },
      function() {
        // CardStateSavedToDiskActionCreate
      }
    );
  }

};

module.exports = CardRepository;
