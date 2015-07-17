var fjs = require('functional.js');
var Dispatch = require('./Dispatch');

var CardStore = function() {
  this._listeners = [];
  this.card = '';
  this.cards = [];
  this.current_card_id = 0;
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

CardStore.prototype.addCard = function (card) {
  this.cards.push(card);
};

CardStore.prototype.addCards = function (cards) {
  Array.prototype.push.apply(this.cards, cards);
  this.setCurrentCardById(fjs.last("x => true", this.cards).id);
};

CardStore.prototype.getCardById = function (id) {
  return fjs.first(function(x) { return x.id == id }, this.cards);
};

CardStore.prototype.setCards = function(cards) {
  this.cards = cards;
};

CardStore.prototype.getCurrentCard = function () {
  return this.getCardById(this.current_card_id);
};

CardStore.prototype.setCurrentCardById = function (id) {
  this.current_card_id = id;
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
