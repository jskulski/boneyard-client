var should = require('chai').should(); // nb. call func

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Card = require('../src/Card');

describe('Card Component', function () {

  before('rendered into the document', function () {

    this.expectedBody = "This is the body";

    var renderedComponent = TestUtils.renderIntoDocument(
      <Card body={this.expectedBody}/>
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

  //it('should change the value on change', function () {
  //  var expectedText = 'Hello, world';
  //  TestUtils.Simulate.change(this.inputElement, {target: {value: expectedText}});
  //  this.inputElement.value.should.equal(expectedText);
  //  //console.log(this.inputElement.value);
  //});

  //it('sends a save request to the server when the content is changed', function () {
  //});

});

