var React = require('react');
var CardRepository = require('./CardRepository');
var CardStore = require('./CardStore');

var Card = React.createClass({

  getInitialState: function() {
    return {
      'body': this.props.body
    }
  },

  componentDidMount: function() {
    CardStore.addChangeListener();
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


// Store?
var Dispatch = require('./Dispatch');
Dispatch.register(function(payload) {
  CardStore.updateCard(payload.cardText);
});

module.exports = Card;
