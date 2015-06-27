var Dispatch = function() {
  this.callbacks = [];
};

Dispatch.prototype.dispatch = function(payload) {
  for (var i = 0; i < this.callbacks.length; i++) {
    this.callbacks[i](payload);
  }
};

Dispatch.prototype.register = function(callback) {
  this.callbacks.push(callback);
};

module.exports = new Dispatch();
