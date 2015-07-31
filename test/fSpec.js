var r = require('ramda');

var CardsRing = require('../src/CardsRing');
var Card = require('../src/Card');
var card = Card.new;


var should = require('chai').should();


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

    var actual_cards = CardsRing.nextCard(cards);

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

    var actual_cards = CardsRing.nextCard(mock_cards);

    assertEquals(expected_cards, actual_cards);
  });

  it('prev on list of one returns same list', function () {
    var mock_cards = [ card('1') ];
    var expected_cards = [ card('1') ];

    var actual_cards = CardsRing.prevCard(mock_cards);

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

    var actual_cards = CardsRing.prevCard(cards);

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

    var actual_cards = CardsRing.addCard(mock_cards);

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

    var actual_cards = CardsRing.deleteCard(mock_cards);

    assertEquals(expected_cards, actual_cards);
  })

});
