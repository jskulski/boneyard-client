var Actions = require('./CardServerActionCreator');

var urls = require('../config/urls');

var nanoajax = require('nanoajax');

var CardRepository = {

  retrieve: function() {
    nanoajax.ajax(urls.CARDS_ENDPOINT, function(code, responseText) {
      if (code == 200) {
        var parsedPayload = JSON.parse(responseText);
        Actions.retrievedCards(parsedPayload[0].body);
      }
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
