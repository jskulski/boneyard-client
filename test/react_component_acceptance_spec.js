var should = require('chai').should(); // nb. call func
var sinon = require('sinon');

var http = require('iso-http');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Card = require('../src/Card');

describe('Card Component', function () {


  before('rendered into the document', function () {
    this.expectedBody = "This is the body";

    var renderedComponent = TestUtils.renderIntoDocument(
      <Card body={this.expectedBody} />
    );

    var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'TEXTAREA'
    );

    this.inputElement = inputComponent.getDOMNode();

    _setup_xhr_spying.call(this);
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

    this.requests.length.should.equal(1);
    var req = this.requests[0];

    req.method.should.equal('POST');
    req.url.should.equal('/card');
    req.requestBody.should.deep.equal({body: expectedText})
  });


  function _setup_xhr_spying() {
    global.XMLHttpRequest = sinon.FakeXMLHttpRequest;

    this.requests = [];
    global.XMLHttpRequest.onCreate = function (xhr) {
      this.requests.push(xhr)
    }.bind(this);
  }

});

