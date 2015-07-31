var r = require('ramda');
var Card = require('./Card');
var card = require('./Card').new;


var CardsRing = module.exports = {

  nextCard: function(cards) {
    if (cards.length == 1) {
      return cards;
    }

    return r.append(r.head(cards), r.tail(cards))
  },

  prevCard: function(cards) {
    if (cards.length == 1) {
      return cards;
    }

    return r.prepend(r.last(cards), r.init(cards));
  },

  addCard: function(cards) {
    return r.prepend(card(Card.DEFAULT_TEXT), cards)
  },

  deleteCard: function(cards) {
    return r.tail(cards);
  }

};

