var should = require('chai').should(); // nb. call func

describe('test harness', function () {
  it('should work correctly', function () {
    true.should.equal(true);
  });
});


var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Card = require('../app/scripts/Card');

describe('Card Component', function () {

  it('can be rendered into the docuemnt', function () {
    var renderedComponent = TestUtils.renderIntoDocument(
      <Card />
    );

    var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'TEXTAREA'
    );

    this.inputElement = inputComponent.getDOMNode();
  });

  it('should have a textarea', function () {
    this.inputElement.tagName.should.equal('TEXTAREA');
  })

});
