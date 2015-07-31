var r = require('ramda');

var should = require('chai').should();

var Card = function(text) {
  this.text = text;
};
Card.DEFAULT_TEXT = '';
Card.prototype = {
  equals: function(card) {
    return card.text == this.text;
  }
};
var card = function(text) { return new Card(text) };

var nextCard = function(cards) {
  if (cards.length == 1) {
    return cards;
  }

  return r.append(r.head(cards), r.tail(cards))
};

function prevCard(cards) {
  if (cards.length == 1) {
    return cards;
  }

  return r.prepend(r.last(cards), r.init(cards));
}

function addCard(cards) {
  return r.prepend(card(Card.DEFAULT_TEXT), cards)
}

function deleteCard(cards) {
  return r.tail(cards);
}

function assertEquals(expected_cards, actual_cards) {
  r.equals(expected_cards, actual_cards).should.be.true;
}

describe('card ring', function() {

  it('can select the next card in a list of cards', function() {
    var cards = [
      card('1'),
      card('2'),
      card('3'),
      card('4')
    ];

    var actual_cards = nextCard(cards);

    var expected_cards = [
      card('2'),
      card('3'),
      card('4'),
      card('1')
    ];

    assertEquals(expected_cards, actual_cards);
  });

  it('next on list of one returns same list', function () {
    var mock_cards = [ card('1') ];
    var expected_cards = [ card('1') ];

    var actual_cards = nextCard(mock_cards);

    assertEquals(expected_cards, actual_cards);
  });

  it('prev on list of one returns same list', function () {
    var mock_cards = [ card('1') ];
    var expected_cards = [ card('1') ];

    var actual_cards = prevCard(mock_cards);

    assertEquals(expected_cards, actual_cards);
  });

  it('can select the previous card', function () {
    var cards = [
      card('1'),
      card('2'),
      card('3'),
      card('4')
    ];

    var expected_cards = [
      card('4'),
      card('1'),
      card('2'),
      card('3')
    ];

    var actual_cards = prevCard(cards);

    assertEquals(expected_cards, actual_cards);
  });

  it('can add a card to the ring', function() {
    var mock_cards = [
      card('2'),
      card('3'),
      card('4')
    ];
    var expected_cards = [
      card(Card.DEFAULT_TEXT),
      card('2'),
      card('3'),
      card('4')
    ];

    var actual_cards = addCard(mock_cards);

    assertEquals(expected_cards, actual_cards);
  });

  it('can delete a card', function () {
    var mock_cards = [
      card('1'),
      card('2'),
      card('3'),
      card('4')
    ];
    var expected_cards = [
      card('2'),
      card('3'),
      card('4')
    ];

    var actual_cards = deleteCard(mock_cards);

    assertEquals(expected_cards, actual_cards);
  })

});
