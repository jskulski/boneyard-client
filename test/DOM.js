var jsdom = require('jsdom');

module.exports = {
  stub: function() {
    global.document = jsdom.jsdom(
      '<!doctype html><html><body><div id="app"></div></body></html>'
    );
    global.window = document.parentWindow;
    global.navigator = global.window.navigator;
  }
};
