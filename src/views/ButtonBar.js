var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var GridLayout = require('famous/views/GridLayout');

var ButtonView = require('./ButtonView');

function ButtonBar() {
    View.apply(this, arguments);

    _createLayout.call(this);
    _createButtons.call(this);

    this.selection;

    this._eventInput.on('buttonClick', this.select.bind(this));
}

ButtonBar.prototype = Object.create(View.prototype);
ButtonBar.prototype.constructor = ButtonBar;

ButtonBar.DEFAULT_OPTIONS = {};

function _createLayout() {
    this.layout = new GridLayout({
        dimensions: [this.options.sections.length, 1]
    });

    this.add(this.layout);
}

function _createButtons() {
    this.buttons = [];

    for (var i = 0; i < this.options.sections.length; i++) {
        var buttonInfo = this.options.sections[i].button;
        buttonInfo.index = i;
        var button = new ButtonView(buttonInfo);

        this.buttons.push(button);
        this.subscribe(button);
    }

    this.layout.sequenceFrom(this.buttons);
}

ButtonBar.prototype.select = function(index) {
    if (index === this.selection) return;
    this._eventOutput.emit('changeSelection', index);
    if (this.selection !== undefined) this.buttons[this.selection].toggle();
    this.selection = index;
    this.buttons[index].toggle();
};

module.exports = ButtonBar;
