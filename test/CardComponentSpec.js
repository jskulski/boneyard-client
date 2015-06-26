var should = require('chai').should();
var sinon = require('sinon');
var XHRSpy = require('./XHRSpy');

var urls = require('../config/urls.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Card = require('../src/Card');
var CardRepository = require('../src/CardRepository');

describe('Card Component', function () {

  beforeEach('rendered into the document', function () {
    this.expectedBody = "This is the body";

    var renderedComponent = TestUtils.renderIntoDocument(
      <Card body={this.expectedBody} />
    );

    var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'TEXTAREA'
    );

    this.inputElement = inputComponent.getDOMNode();
  });

  it('should have a textarea', function () {
    this.inputElement.tagName.should.equal('TEXTAREA');
  });

  it('should display the current card data', function () {
    this.inputElement.value.should.equal(this.expectedBody)
  });

  it('should save the card when a user inputs text', function () {
    var expectedText = 'Hello there';
    var card_repostior_original_save = CardRepository.save;
    CardRepository.save = sinon.spy();

    TestUtils.Simulate.change(this.inputElement, {target: {value: expectedText}});
    this.inputElement.value = expectedText;

    CardRepository.save.called.should.be.true;
    CardRepository.save = card_repostior_original_save;
  });

});

