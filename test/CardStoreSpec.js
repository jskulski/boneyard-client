var should = require('chai').should();
var sinon = require('sinon');

var CardStore = require('../src/CardStore');



describe('Card Store', function () {
  it('should be a full global object i suppose', function () {
    CardStore.should.be.a.CardStore;
  });

  it ('should emit an event to an registered listener', function () {
    var spy = sinon.spy();
    CardStore.addChangeListener(spy);

    CardStore.emitChange();

    spy.called.should.be.true;
  })
});

