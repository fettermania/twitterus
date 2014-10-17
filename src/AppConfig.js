var TweetData = require('./TweetData');
var Transform = require('famous/core/Transform');
var Easing = require('famous/transitions/Easing');

module.exports = {
    headerSize: 44,
    footerSize: 60,
    sections: [
        {
            title: 'Twitterus',
            button:
                {
                    label: 'Home',
                    iconUrl: 'images/home.svg'
                }
        },
        {
            title: 'Shu Liu',
            button:
                {
                    label: 'Profile',
                    iconUrl: 'images/user.svg'
                }
        },
        {
            title: 'Messages',
            button:
                {
                    label: 'Messages',
                    iconUrl: 'images/messages.svg'
                }
        }
    ],
    transitions: {
        content: {
            inTransform: Transform.translate(500, 0, -800),
            outTransform: Transform.thenMove(Transform.rotateY(1.8), [-200, 0, -500]),
            inTransition: { curve: Easing.outExpo, duration: 350},
            outTransition: { curve: Easing.inQuad, duration: 250},
            inOpacity: 0,
            outOpacity: 0,
            overlap: false
        },
        header: {
            inTransform: Transform.translate(0, -100, 0),
            outTransform: Transform.translate(0, -100, 0),
            inTransition: { curve: Easing.outExpo, duration: 350},
            outTransition: { curve: Easing.inQuad, duration: 250},
            inOpacity: 1,
            outOpacity: 0,
            overlap: false
        }
    },
    tweetData: TweetData
};
