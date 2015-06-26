var React = require('react');
var Card = require('./Card');

var BoneyardApp = React.createClass({

  render: function() {
    return (
      <Card />
    )
  }

});

BoneyardApp.init = function() {
  React.render(
    React.createElement(BoneyardApp),
    document.getElementById('app')
  );
};

module.exports = BoneyardApp;
