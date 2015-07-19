var should = require('chai').should();
var sinon = require('sinon');

var CardStore = require('../src/CardStore');

describe('Card Store', function () {

  beforeEach(function() {
    this.cardStore = new CardStore();
    this.mockCards = [
      { id: 192, text: 'this is card one'   },
      { id: 292, text: 'this is card two'   },
      { id: 392, text: 'this is card three' }
    ];
  });

  it ('should emit an event to an registered listener', function () {
    var spy = sinon.spy();
    this.cardStore.addChangeListener(spy);

    this.cardStore.emitChange();

    spy.called.should.be.true;
  });

  it('should be able to have a card added', function() {
    this.cardStore.addCard(this.mockCards[0]);
  });

  it('should choose the last card by default as the current card', function() {
    this.cardStore.addCards(this.mockCards);

    var actualCard = this.cardStore.getCurrentCard();

    actualCard.should.equal(this.mockCards[2]);
  });

  it('should be able to have multiple cards added', function () {
    this.cardStore.addCards(this.mockCards);
  });

  it('should be able to retrieve a card from many', function() {
    this.cardStore.addCards(this.mockCards);

    var actualCard = this.cardStore.getCardById(this.mockCards[2].id);

    actualCard.should.equal(this.mockCards[2]);
  });

  it('can select a new current card by id', function() {
    this.cardStore.addCards(this.mockCards);

    this.cardStore.setCurrentCardById(this.mockCards[1].id);

    this.cardStore.getCurrentCard().should.equal(this.mockCards[1]);
  });

  it('can select the next card in the ring', function() {
    this.cardStore.addCards(this.mockCards);
    this.cardStore.setCurrentCardById(this.mockCards[1].id);

    this.cardStore.nextCard();

    this.cardStore.getCurrentCard().should.equal(this.mockCards[2]);
  });

  it('loops to the first card on next at last', function () {
    var last = this.mockCards.length - 1;
    this.cardStore.addCards(this.mockCards);
    this.cardStore.setCurrentCardById(this.mockCards[last].id);

    this.cardStore.nextCard();

    this.cardStore.getCurrentCard().should.equal(this.mockCards[0]);
  });

  it('can select previous card in ring', function () {
    this.cardStore.addCards(this.mockCards);
    this.cardStore.setCurrentCardById(this.mockCards[1].id);

    this.cardStore.previousCard();

    this.cardStore.getCurrentCard().should.equal(this.mockCards[0]);
  });

  it('loops to the end on previous at first card', function() {
    var last = this.mockCards.length - 1;
    this.cardStore.addCards(this.mockCards);
    this.cardStore.setCurrentCardById(this.mockCards[0].id);

    this.cardStore.previousCard();

    this.cardStore.getCurrentCard().should.equal(this.mockCards[last]);
  });



});

