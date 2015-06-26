var React = require('react');
var Card = require('./Card');

var BoneyardApp = React.createClass({

  render: function() {
    return (
      <Card />
    )
  }

});

var startApp = (function() {
  console.log('Starting application');
  React.render(
    <BoneyardApp />,
    document.getElementById('app')
  );
});

startApp();






