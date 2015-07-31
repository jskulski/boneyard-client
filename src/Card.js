var Card = function(text) {
  this.text = text;
};

Card.DEFAULT_TEXT = '';

Card.prototype = {
  equals: function(card) {
    return card.text == this.text;
  }
};

Card.new = function(text) { return new Card(text) };

module.exports = Card;

