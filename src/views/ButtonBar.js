var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var GridLayout = require('famous/views/GridLayout');

var ButtonView = require('./ButtonView');

function ButtonBar() {
    View.apply(this, arguments);

    _createLayout.call(this);
    _createButtons.call(this);

    this._eventInput.on('buttonClick', function(index) {
        this._eventOutput.emit('changeSelection', index);
    }.bind(this));
}

ButtonBar.prototype = Object.create(View.prototype);
ButtonBar.prototype.constructor = ButtonBar;

ButtonBar.DEFAULT_OPTIONS = {};

function _createLayout() {
    this.layout = new GridLayout({
        dimensions: [this.options.buttons.length, 1]
    });

    this.add(this.layout);
}

function _createButtons() {
    var buttons = [];

    for (var i = 0; i < this.options.buttons.length; i++) {
        var buttonInfo = this.options.buttons[i];
        buttonInfo.index = i;
        var button = new ButtonView(buttonInfo);

        buttons.push(button);
        this.subscribe(button);
    }

    this.layout.sequenceFrom(buttons);
}

module.exports = ButtonBar;
