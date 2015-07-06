var React = require('react');
var CardRepository = require('./CardRepository');

var Card = React.createClass({

  getInitialState: function() {
    return {
      'body': this.props.body
    }
  },

  handleChange: function(event) {
    CardRepository.save(event.target.value);
  },

  render: function() {
    return (
      <label>
        <textarea defaultValue={this.state.body}
                  onChange={this.handleChange} />
      </label>
    );
  }
});

var store = '';

// Store?
var Dispatch = require('./Dispatch');
Dispatch.register(function(payload) {
  store = payload.cardText;
  // TODO: emit event so component can react
});

module.exports = Card;
