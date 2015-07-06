var jsdom = require('jsdom');

module.exports = {
  stub: function() {
    global.document = jsdom.jsdom(
      '<!doctype html><html><body><div id="app"></div></body></html>'
    );
    global.window = global.document.parentWindow;
    global.navigator = global.window.navigator;
  }
};
