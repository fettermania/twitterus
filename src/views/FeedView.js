var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Scrollview = require('famous/views/Scrollview');
var ContainerSurface = require('famous/surfaces/ContainerSurface');

var TweetView = require('./TweetView');

function FeedView() {
    View.apply(this, arguments);

    var container = new ContainerSurface({
        properties: {
            overflow: 'hidden'
        }
    });

    var feed = new Scrollview({
        groupScroll: true
    });

    this.add(container);
    container.add(feed);

    var tweets = [];

    for (var i = 0; i < this.options.tweetData.length; i++) {
        var tweetInfo = this.options.tweetData[i];
        tweetInfo.index = i;
        tweets.push(new TweetView(tweetInfo));
    }

    feed.sequenceFrom(tweets);
}

FeedView.prototype = Object.create(View.prototype);
FeedView.prototype.constructor = FeedView;

FeedView.DEFAULT_OPTIONS = {};

module.exports = FeedView;
