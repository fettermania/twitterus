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
    this.headers = [];
    this.content = [];

    _createLayout.call(this);
    _createHeaders.call(this);
    _createContent.call(this);
    _createFooter.call(this);

    this.buttonBar.on('changeSelection', function(index) {
        this.headerLightbox.show(this.headers[index]);
        this.contentLightbox.show(this.content[index]);
    }.bind(this));

    this.buttonBar.select(0);
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

    this.contentLightbox = new Lightbox({
        inTransform: Transform.translate(500, 0, -800),
        outTransform: Transform.thenMove(Transform.rotateY(1.3), [-200, 0, -500]),
        inTransition: { curve: Easing.outExpo, duration: 350},
        outTransition: { curve: Easing.inQuad, duration: 250},
        inOpacity: 1,
        outOpacity: 1,
        overlap: false
    });

    this.layout.content.add(this.contentLightbox);

    this.headerLightbox = new Lightbox({
        inTransform: Transform.translate(0, -100, 0),
        outTransform: Transform.translate(0, -100, 0),
        inTransition: { curve: Easing.outExpo, duration: 350},
        outTransition: { curve: Easing.inQuad, duration: 250},
        inOpacity: 1,
        outOpacity: 0,
        overlap: false
    });

    this.layout.header.add(this.headerLightbox);
}

function _createHeaders() {
    var background = new Surface({
        properties: {
            backgroundColor: '#3be',
        }
    });

    this.layout.header.add(background);

    for (var i = 0; i < this.options.sections.length; i++) {
        var header = new Surface({
            content: this.options.sections[i].title,
            properties: {
                color: 'white',
                fontSize: '20px',
                textAlign: 'center',
                lineHeight: this.options.headerSize + 'px'
            }
        });
        this.headers.push(header);
    }
}

function _createContent() {
    this.content.push(new FeedView({
        tweetData: this.options.tweetData
    }));

    this.content.push(new ProfileView());
}

function _createFooter() {
    this.buttonBar = new ButtonBar({
        sections: this.options.sections
    });

    this.layout.footer.add(this.buttonBar);
}

module.exports = AppView;
