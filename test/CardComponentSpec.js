var should = require('chai').should();
var sinon = require('sinon');
var XHRSpy = require('./XHRSpy');
var DOM = require('./DOM');

var urls = require('../config/urls.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Card = require('../src/Card');
var CardRepository = require('../src/CardRepository');

describe('Card Component', function () {

  beforeEach(function () {
    this.expectedBody = "This is the body";

    this.component = TestUtils.renderIntoDocument(
      <Card body={this.expectedBody} />
    );

    var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
      this.component,
      'TEXTAREA'
    );

    this.inputElement = inputComponent.getDOMNode();

    this.xhr = new XHRSpy();
  });

  it('should have a textarea', function () {
    this.inputElement.tagName.should.equal('TEXTAREA');
  });

  it('should display the current card data', function () {
    this.inputElement.value.should.equal(this.expectedBody)
  });

  it('should save the card when a user inputs text', function () {
    var expectedText = 'Hello there';
    var card_repostiory_original_save = CardRepository.save;
    CardRepository.save = sinon.spy();

    TestUtils.Simulate.change(this.inputElement, {target: {value: expectedText}});
    this.inputElement.value = expectedText;

    CardRepository.save.called.should.be.true;
    CardRepository.save = card_repostiory_original_save;
  });

  // This is functionally incomplete. Need event emitter or something so that when
  // 'store' is updated, component can react. - JSK
  //
  //it('component is updated with card text when updated card action received', function () {
  //  this.xhr.enable();
  //
  //  var expectedText = 'hi this is the expected test';
  //  CardRepository.retrieve();
  //
  //  this.xhr.requests.length.should.equal(1);
  //  this.xhr.requests[0].respond(
  //    200,
  //    {"Content-Type": "application/json"},
  //    '[{ "body": "'+ expectedText +'"}]'
  //  );
  //
  //  this.component.state.body.should.equal(expectedText);
  //
  //  this.xhr.disable();
  //});
});

