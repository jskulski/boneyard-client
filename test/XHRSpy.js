var sinon = require('sinon');

var XHRSpy = function() {
  this.requests = [];
};

XHRSpy.prototype.enable = function() {
  this.oldXMLHttpRequest = global.XMLHttpRequest;
  global.XMLHttpRequest = sinon.FakeXMLHttpRequest;

  global.XMLHttpRequest.onCreate = function (xhr) {
    this.requests.push(xhr);
  }.bind(this);

  return this;
};

XHRSpy.prototype.disable = function() {
  global.XMLHttpRequest = this.oldXMLHttpRequest;
};

module.exports = XHRSpy;
