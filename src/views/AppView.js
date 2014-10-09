var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var Lightbox = require('famous/views/Lightbox');
var Easing = require('famous/transitions/Easing');
var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');

var FeedView = require('./FeedView');
var ProfileView = require('./ProfileView');
var ButtonBar = require('./ButtonBar');

function AppView() {
    View.apply(this, arguments);

    this.layout;
    this.sections = [];

    _createLayout.call(this);
    _addHeader.call(this);
    _addFooter.call(this);
    _createSections.call(this);

    this.lightbox.show(this.sections[0]);
}

AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

AppView.DEFAULT_OPTIONS = {};

function _createLayout() {
    this.layout = new HeaderFooterLayout({
        headerSize: this.options.headerSize,
        footerSize: this.options.footerSize
    });

    this.add(this.layout);

    this.lightbox = new Lightbox({
        inTransform: Transform.thenMove(Transform.rotateY(1), [100, 0, -500]),
        outTransform: Transform.translate(-500, 0, 0),
        inTransition: { curve: Easing.outExpo, duration: 800},
        outTransition: { curve: 'easeIn', duration: 250},
        inOpacity: 1,
        outOpacity: 1,
        overlap: false
    });

    this.layout.content.add(this.lightbox);
}

function _addHeader() {
    var header = new Surface({
        properties: {
            backgroundColor: 'blue'
        }
    });

    this.layout.header.add(header);
}

function _addFooter() {
    this.buttonBar = new ButtonBar({
        buttons: this.options.buttons
    });

    this.layout.footer.add(this.buttonBar);

    this.buttonBar.on('changeSelection', function(index) {
        this.lightbox.show(this.sections[index]);
    }.bind(this));
}

function _createSections() {
    this.sections.push(new FeedView());
    this.sections.push(new ProfileView());
}

module.exports = AppView;
