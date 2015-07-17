var should = require('chai').should();
var sinon = require('sinon');

var CardServerActionCreator = require('../src/CardServerActionCreator');
var ActionTypes = require('../src/ActionTypes');
var Dispatcher = require('../src/Dispatch');

describe('CardServerActionCreator', function() {

  it('creating a receivedCard dispatches the action', function() {
    var expectedText = 'this my expected card text';
    sinon.stub(Dispatcher, 'dispatch');

    CardServerActionCreator.retrievedCards(expectedText);

    Dispatcher.dispatch.calledOnce.should.be.true;
    Dispatcher.dispatch.calledWith({
      actionType: ActionTypes.CARD_RETRIEVED,
      cardText: expectedText
    }).should.be.true;

    Dispatcher.dispatch.restore();
  });

});

