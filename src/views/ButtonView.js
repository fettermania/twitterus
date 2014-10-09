var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var Transitionable = require('famous/transitions/Transitionable');

function ButtonView() {
    View.apply(this, arguments);

    this.rootMod = new Modifier();

    var buttonSurface = new Surface({
        content: '<img src="' + this.options.iconUrl + '" width="20"><p>' + this.options.name + '</p>',
        properties: {
            textAlign: 'center'
        }
    });

    this.add(this.rootMod).add(buttonSurface);
}

ButtonView.prototype = Object.create(View.prototype);
ButtonView.prototype.constructor = ButtonView;

ButtonView.DEFAULT_OPTIONS = {};

module.exports = ButtonView;
