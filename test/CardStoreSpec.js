var should = require('chai').should();
var sinon = require('sinon');

var CardStore = require('../src/CardStore');

describe('Card Store', function () {

  beforeEach(function() {
    CardStore.setCards([]);
    this.mockCards = [
      { id: 192, text: 'this is card one'   },
      { id: 292, text: 'this is card two'   },
      { id: 392, text: 'this is card three' }
    ];
  });

  it('should be a full global object i suppose', function () {
    CardStore.should.be.a.CardStore;
  });

  it ('should emit an event to an registered listener', function () {
    var spy = sinon.spy();
    CardStore.addChangeListener(spy);

    CardStore.emitChange();

    spy.called.should.be.true;
  });

  it('should be able to have a card added', function() {
    CardStore.addCard(this.mockCards[0]);
  });

  it('should choose the last card by default as the current card', function() {
    CardStore.addCards(this.mockCards);

    var actualCard = CardStore.getCurrentCard();

    actualCard.should.equal(this.mockCards[2]);
  });

  it('should be able to have multiple cards added', function () {
    CardStore.addCards(this.mockCards);
  });

  it('should be able to retrieve a card from many', function() {
    CardStore.addCards(this.mockCards);

    var actualCard = CardStore.getCardById(this.mockCards[2].id);

    actualCard.should.equal(this.mockCards[2]);
  });

  it('can select a new current card by id', function() {
    CardStore.addCards(this.mockCards);

    CardStore.setCurrentCardById(this.mockCards[1].id);

    CardStore.getCurrentCard().should.equal(this.mockCards[1]);
  });

});

