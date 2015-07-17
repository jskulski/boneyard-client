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

Dispatch.register(function(payload) {
  cardStore.updateCard(payload.cardText);
});


module.exports = cardStore;
