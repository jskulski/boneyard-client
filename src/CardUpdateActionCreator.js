var Dispatch = require('./Dispatch');
var ActionTypes = require('./ActionTypes');

module.exports = {

  cardUpdated: function(cardText) {
    Dispatch.dispatch({
      actionType: ActionTypes.CARD_UPDATED,
      cardText: cardText
    });
  }

};
