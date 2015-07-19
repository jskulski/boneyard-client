var f = require('functional.js');
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
  this.setCurrentCardById(f.last("x => true", this.cards).id);
};

CardStore.prototype.getCardById = function (id) {
  return f.first(function(x) { return x.id == id }, this.cards);
};

CardStore.prototype.getCurrentCard = function () {
  return this.getCardById(this.current_card_id);
};

CardStore.prototype.isLast = function(index) {
  return index >= this.cards.length - 1;
};

CardStore.prototype.isFirst = function(index) {
  return index <= 0;
};

CardStore.prototype.previousCard = function () {
  var last = this.cards.length - 1;
  var index = this.cards.indexOf(this.getCurrentCard());
  var prev = this.isFirst(index) ? last : index - 1;
  this.setCurrentCardById(this.cards[prev].id);
};

CardStore.prototype.nextCard = function () {
  var index = this.cards.indexOf(this.getCurrentCard());
  var next = this.isLast(index) ? 0 : index + 1;
  this.setCurrentCardById(this.cards[next].id)
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


module.exports = CardStore;
module.exports.instance = cardStore;
