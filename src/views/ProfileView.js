var View = require('famous/core/View');
var Surface = require('famous/core/Surface');

function ProfileView() {
    View.apply(this, arguments);

    this.add(new Surface({
        content: 'Profile View',
        properties: {
            backgroundColor: 'lime'
        }
    }));
}

ProfileView.prototype = Object.create(View.prototype);
ProfileView.prototype.constructor = ProfileView;

ProfileView.DEFAULT_OPTIONS = {};

module.exports = ProfileView;
