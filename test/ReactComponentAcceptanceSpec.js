var should = require('chai').should();
var sinon = require('sinon');
var XHRSpy = require('./XHRSpy');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Card = require('../src/Card');

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

    this.xhr = new XHRSpy().enable();
  });

  afterEach(function (){
    this.xhr.disable();
  });

  it('should have a textarea', function () {
    this.inputElement.tagName.should.equal('TEXTAREA');
  });

  it('should display the current card data', function () {
    this.inputElement.value.should.equal(this.expectedBody)
  });

  it('should send a xhr request when the user changes the card', function () {
    var expectedText = 'Hello there';

    TestUtils.Simulate.change(this.inputElement, {target: {value: expectedText}});
    this.inputElement.value = expectedText;

    this.xhr.requests.length.should.equal(1);
    var req = this.xhr.requests[0];

    req.method.should.equal('POST');
    req.url.should.equal('/card');
    req.requestBody.should.deep.equal({body: expectedText})
  });

});

