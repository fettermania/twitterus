var TweetData = require('./TweetData');

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
    tweetData: TweetData
};
