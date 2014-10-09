var View = require('famous/core/View');
var Surface = require('famous/core/Surface');

function FeedView() {
    View.apply(this, arguments);

    this.add(new Surface({
        content: 'Feed View',
        properties: {
            backgroundColor: 'yellow'
        }
    }));
}

FeedView.prototype = Object.create(View.prototype);
FeedView.prototype.constructor = FeedView;

FeedView.DEFAULT_OPTIONS = {};

module.exports = FeedView;
