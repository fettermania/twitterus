var View = require('famous/core/View');
var Surface = require('famous/core/Surface');

function EmptyView() {
    View.apply(this, arguments);
}

EmptyView.prototype = Object.create(View.prototype);
EmptyView.prototype.constructor = EmptyView;

EmptyView.DEFAULT_OPTIONS = {};

module.exports = EmptyView;
