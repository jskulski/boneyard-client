var Dispatch = require('./Dispatch');

var CardStore = function() {
  this._listeners = [];
  this.card = '';
};

CardStore.prototype.updateCard = function(cardText) {
  this.card = cardText;
  this.emitChange()
};

CardStore.prototype.getCardText = function () {
  return this.card;
};

CardStore.prototype.setCardText = function (cardText) {
  this.card = cardText;
};


CardStore.prototype.addChangeListener = function(f) {
  if (typeof f == 'function') {
    this._listeners.push(f);
  }
};

CardStore.prototype.emitChange = function () {
  for (var i = 0; i < this._listeners.length; i++) {
    this._listeners[i].apply(this);
  }
};

var cardStore = new CardStore();
var ActionTypes = require('./ActionTypes');
var CardRepository = require('./CardRepository');


Dispatch.register(function(payload) {
  switch(payload.actionType) {
    case ActionTypes.CARD_UPDATED:
      CardRepository.save(payload.cardText);
      break;

    case ActionTypes.CARD_RETRIEVED:
      cardStore.updateCard(payload.cardText);
      break;
  }
});


module.exports = cardStore;
