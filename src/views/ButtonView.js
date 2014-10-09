var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var Transitionable = require('famous/transitions/Transitionable');

function ButtonView() {
    View.apply(this, arguments);

    this.rootMod = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });

    var buttonSurface = new Surface({
        size: [true, true],
        content: '<img src="' + this.options.iconUrl + '" width="20"><p>' + this.options.label + '</p>',
        classes: ['button']
    });

    this.add(this.rootMod).add(buttonSurface);

    buttonSurface.on('click', function() {
        this._eventOutput.emit('buttonClick', this.options.index);
    }.bind(this));
}

ButtonView.prototype = Object.create(View.prototype);
ButtonView.prototype.constructor = ButtonView;

ButtonView.DEFAULT_OPTIONS = {};

module.exports = ButtonView;
