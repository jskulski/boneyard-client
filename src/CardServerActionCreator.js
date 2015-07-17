var Dispatch = require('./Dispatch');
var ActionTypes = require('./ActionTypes');

module.exports = {

  retrievedCards: function(cardText) {
    Dispatch.dispatch({
      actionType: ActionTypes.CARD_RETRIEVED,
      cardText: cardText
    });
  }

};
