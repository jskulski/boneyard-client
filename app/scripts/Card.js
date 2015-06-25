var React = require('react');

var Card = React.createClass({
  render: function() {
    return (
      <label>
        <textarea defaultValue={this.props.body} />
      </label>
    );
  }
});

module.exports = Card;
