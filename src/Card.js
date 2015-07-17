var React = require('react');
var CardRepository = require('./CardRepository');
var CardStore = require('./CardStore');

function getStateFromStores() {
  return {
    body: CardStore.getCardText()
  }
}

var Card = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    CardStore.addChangeListener(this.handleStoreEvent);
  },

  handleStoreEvent: function() {
    this.setState(getStateFromStores());
  },

  handleChange: function(event) {
    // We want this to happen through actions
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
