var React = require('react');

var Card = React.createClass({

  getInitialState: function() {
    return {
      'body': this.props.body
    }
  },

  handleChange: function(event) {

    var nanoajax = require('nanoajax');
    nanoajax.ajax({
        url: '/card',
        method: 'POST',
        body: {body: event.target.value}
      },
      function() {
        console.log('yeah?');
      }
    );

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
