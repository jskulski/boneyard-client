var React = require('react');
var Card = require('./Card');
var CardRepository = require('./CardRepository');

var BoneyardApp = React.createClass({

  render: function() {
    return (
      <Card />
    )
  }

});

BoneyardApp.init = function() {

  CardRepository.retrieve();

  React.render(
   React.createElement(BoneyardApp),
    document.getElementById('app')
  );
};

module.exports = BoneyardApp;
