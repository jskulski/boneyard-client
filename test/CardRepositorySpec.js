var should = require('chai').should(); // nb. call func
var expect = require('chai').expect;
var sinon = require('sinon');
var XHRSpy = require('./XHRSpy');

var urls = require('../config/urls');
var Actions = require('../src/Actions');
var CardRepository = require('../src/CardRepository');

describe('Card Repository', function() {

  beforeEach(function() {
    this.xhr = new XHRSpy().enable();
  });

  afterEach(function() {
    this.xhr.disable();
  });

  it('can ask the api for a list of cards', function() {
    CardRepository.retrieve();

    this.xhr.requests.length.should.equal(1);

    var request = this.xhr.requests[0];
    request.url.should.equal(urls.CARDS_ENDPOINT);
  });

  it('should send a xhr request when asked to save a card', function() {
    var expectedText = 'Hello there this is magic';

    CardRepository.save(expectedText);

    this.xhr.requests.length.should.equal(1);
    var req = this.xhr.requests[0];

    req.method.should.equal('POST');
    req.url.should.equal(urls.CARD_ENDPOINT);
    req.requestBody.should.equal("body=" + expectedText);
  });

  it('a successful retrieval sends a Card Data received action', function() {
    sinon.stub(Actions, 'retrievedCards');

    CardRepository.retrieve();

    this.xhr.requests[0].respond(
      200,
      {"Content-Type": "application/json"},
      '[{ "body": "expected text" }]'
    );

    Actions.retrievedCards.calledOnce.should.be.true;

    Actions.retrievedCards.restore();
  });

});
