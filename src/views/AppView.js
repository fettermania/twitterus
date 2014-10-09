var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Lightbox = require('famous/views/Lightbox');
var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');

var FeedView = require('./FeedView');
var ProfileView = require('./ProfileView');
var ButtonBar = require('./ButtonBar');

function AppView() {
    View.apply(this, arguments);

    this.layout;
    this.sections = {};

    _createLayout.call(this);
    _addHeader.call(this);
    _addFooter.call(this);
    _createSections.call(this);
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

    this.lightbox = new Lightbox();
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

    this.buttonBar.on('changeSelection', function(selectionName) {
        this.lightbox.show(this.sections[selectionName]);
    }.bind(this));
}

function _createSections() {
    this.sections['Home'] = new FeedView();
    this.sections['Profile'] = new ProfileView();
}

module.exports = AppView;
