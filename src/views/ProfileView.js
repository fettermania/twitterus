var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var ImageSurface = require('famous/surfaces/ImageSurface');

function ProfileView() {
    View.apply(this, arguments);

    this.rootNode = this.add(new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5],
    }));

    _createProfilePic.call(this);
    _createName.call(this);
}

ProfileView.prototype = Object.create(View.prototype);
ProfileView.prototype.constructor = ProfileView;

ProfileView.DEFAULT_OPTIONS = {};

function _createProfilePic() {
    this.profileMod = new Modifier({
        transform: Transform.translate(0, -100, 0)
    });

    var profilePic = new ImageSurface({
        size: [200, 200],
        content: 'images/shu.jpg',
        properties: {
            border: '7px solid #e9e9e9',
            borderRadius: '10px'
        }
    });

    this.rootNode.add(this.profileMod).add(profilePic);
}

function _createName() {
    this.nameMod = new Modifier({
        transform: Transform.translate(0, 40, 0)
    });

    var name = new Surface({
        size: [true, true],
        content: 'Shu Liu<br>@shupacio',
        properties: {
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: '600'
        }
    });

    this.rootNode.add(this.nameMod).add(name);
}

module.exports = ProfileView;
