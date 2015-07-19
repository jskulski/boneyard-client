var React = require('react');
var CardRepository = require('./CardRepository');
var CardStore = require('./CardStore').instance;

var CardUpdateActionCreator = require('./CardUpdateActionCreator');

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
    CardUpdateActionCreator.cardUpdated(event.target.value);
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

module.exports = Card;
