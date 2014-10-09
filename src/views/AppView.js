var View = require('famous/core/View');
var Surface = require('famous/core/Surface');

var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');

function AppView() {
    View.apply(this, arguments);

    this.layout;

    _createLayout.call(this);
    _addHeader.call(this);
    _addFooter.call(this);
    // _init();
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
    var footer = new Surface({
        properties: {
            backgroundColor: 'red'
        }
    });

    this.layout.footer.add(footer);
}

module.exports = AppView;
