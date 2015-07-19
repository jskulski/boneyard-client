var should = require('chai').should();
var sinon = require('sinon');
var XHRSpy = require('./XHRSpy');
var DOM = require('./DOM');

var urls = require('../config/urls.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Card = require('../src/Card.react');
var CardRepository = require('../src/CardRepository');
var CardStore = require('../src/CardStore').instance;

describe('Card Component', function () {

  beforeEach(function () {
    this.expectedCardText = "This is the body";
    CardStore.setCardText(this.expectedCardText);

    this.component = TestUtils.renderIntoDocument(
      <Card />
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

  it('should display the data set in the CardStore', function () {
    this.inputElement.value.should.equal(this.expectedCardText)
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

  it('adds a change listener to the CardStore when component is added to DOM', function() {
    sinon.spy(CardStore, 'addChangeListener');

    var component = TestUtils.renderIntoDocument(
      <Card />
    );

    CardStore.addChangeListener.called.should.be.true;
    CardStore.addChangeListener.restore();
  });

  it('updates when a CardStore is updated', function () {
    var expectedText = 'this is the new text';
    var component = TestUtils.renderIntoDocument(
      <Card />
    );

    CardStore.updateCard(expectedText);

    component.state.body.should.equal(expectedText);
  });

  it('is updated with card text when updated card action received', function () {
   this.xhr.enable();

   var expectedText = 'hi this is the expected test';
   CardRepository.retrieve();

   this.xhr.requests.length.should.equal(1);
   this.xhr.requests[0].respond(
     200,
     {"Content-Type": "application/json"},
     '[{ "body": "'+ expectedText +'"}]'
   );

   this.component.state.body.should.equal(expectedText);

   this.xhr.disable();
  });

});
