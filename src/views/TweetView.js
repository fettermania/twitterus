var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');

function TweetView() {
    View.apply(this, arguments);

    this.rootMod = new Modifier({
        size: [undefined, 100]        
    });

    var backgroundColor = this.options.index % 2 ? '#e9e9e9' : '#f5f5f5';

    this.tweet = new Surface({
        content: this.options.tweet + '<br>',
        classes: ['tweet'],
        properties: {
            backgroundColor: backgroundColor
        }
    });

    this.add(this.rootMod).add(this.tweet);
}

TweetView.prototype = Object.create(View.prototype);
TweetView.prototype.constructor = TweetView;

TweetView.DEFAULT_OPTIONS = {};

module.exports = TweetView;
