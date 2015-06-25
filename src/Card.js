var React = require('react');

var Card = React.createClass({

  getInitialState: function() {
    return {
      'body': this.props.body
    }
  },

  handleChange: function(event) {
    console.log('yeah?');
    console.log(event.target);
    this.setState({value: event.target.value});
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
