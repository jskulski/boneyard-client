var App = require('../src/App.js');
var CardRepository = require('../src/CardRepository');

var DOM = require('./DOM').stub();
var XHRSpy = require('./XHRSpy');
var sinon = require('sinon');
var should = require('chai').should();

describe('App initialization', function() {

  beforeEach(function() {
    this.xhr = new XHRSpy();
    this.xhr.enable();
  });

  afterEach(function() {
    this.xhr.disable();
  });

  it('should ask the card repository for initial card list', function() {
    sinon.stub(CardRepository, 'retrieve');

    App.init();

    CardRepository.retrieve.calledOnce.should.be.true;
    CardRepository.retrieve.restore();
  });


});
