var CardStore = function() {
  this._listeners = [];
  this.card = '';
};

CardStore.prototype.updateCard = function(cardText) {
  this.card = cardText;
};

CardStore.prototype.addChangeListener = function(f) {
  if (typeof f == 'function') {
    this._listeners.push(f);
  }
};

CardStore.prototype.emitChange = function () {
  for (var i = 0; i < this._listeners.length; i++) {
    this._listeners[i].apply(this);
  }
};

module.exports = new CardStore();

