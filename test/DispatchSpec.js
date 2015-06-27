var Dispatch = require('../src/Dispatch');
var Actions = require('../src/Actions');
var ActionTypes = require('../src/ActionTypes');

var should = require('chai').should();
var sinon = require('sinon');

describe('Dispatch', function () {
  it('should allow me to register a call back', function() {
    var expectedText = 'this is my expected test yahhhh';
    var spy = sinon.spy();
    Dispatch.register(spy);

    Actions.retrievedCards(expectedText);

    spy.calledOnce.should.be.true;
    spy.calledWith({
      actionType: ActionTypes.CARD_RETRIEVED,
      cardText: expectedText
    }).should.be.true;
  });

});
