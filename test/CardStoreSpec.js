var should = require('chai').should();
var sinon = require('sinon');

var CardStore = require('../src/CardStore');

describe('Card Store', function () {

  beforeEach(function() {
    CardStore.setCards([]);
    this.mockCards = [
      { id: 1, text: 'this is card one'   },
      { id: 2, text: 'this is card two'   },
      { id: 3, text: 'this is card three' }
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
  })

  it('should be able to have a card added', function() {
    CardStore.addCard(this.mockCards[0]);
  });

  it('should be able to have multipe cards added', function () {
    CardStore.addCards(this.mockCards);
  });


  it('should be able to retrieve a card from many', function() {
    CardStore.addCards(this.mockCards);

    var actualCard = CardStore.getCardById(2);

    actualCard.should.equal(this.mockCards[2]);
  });

});

