var TweetData = require('./TweetData');

module.exports = {
    headerSize: 44,
    footerSize: 60,
    buttons: [
        {
            label: 'Home',
            iconUrl: 'images/home.svg'
        },
        {
            label: 'Profile',
            iconUrl: 'images/user.svg'
        },
        {
            label: 'Messages',
            iconUrl: 'images/messages.svg'
        }
    ],
    tweetData: TweetData
};
