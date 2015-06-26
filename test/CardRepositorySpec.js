var should = require('chai').should(); // nb. call func
var sinon = require('sinon');
var XHRSpy = require('./XHRSpy');

var CardRepository = require('../src/CardRepository');

describe('Card Repository', function() {

  beforeEach(function() {
    this.xhr = new XHRSpy().enable();
  });

  afterEach(function() {
    this.xhr.disable();
  });

  it('should send a xhr request when asked to save a card', function() {
    //CardRepository.save('this is card text');
  });

});
