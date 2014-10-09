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
    this.selection = 0;
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
        inTransform: Transform.translate(500, 0, 0),
        outTransform: Transform.thenMove(Transform.rotateY(2), [-200, 0, -300]),
        inTransition: { curve: Easing.outExpo, duration: 400},
        outTransition: { curve: Easing.inQuad, duration: 300},
        inOpacity: 1,
        outOpacity: 1,
        overlap: false
    });

    this.layout.content.add(this.lightbox);
}

function _addHeader() {
    var header = new Surface({
        content: 'Twitterus',
        properties: {
            color: 'white',
            fontSize: '20px',
            textAlign: 'center',
            backgroundColor: '#3be',
            lineHeight: this.options.headerSize + 'px'
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
        if(index === this.selection) return;
        this.lightbox.show(this.sections[index]);
        this.selection = index;
    }.bind(this));
}

function _createSections() {
    this.sections.push(new FeedView({
        tweetData: this.options.tweetData
    }));

    this.sections.push(new ProfileView());
}

module.exports = AppView;
