const educations = require('./educations.js');
const experiences = require('./experiences.js');
const author = require('./author.js');
module.exports = {
    siteMetaData: {
        siteTitle: 'Adem Hatay | Software Developer',
        siteUrl: 'https://ademhatay.com',
        siteDescription: 'Adem Hatay\'s personal website',
        siteImage: '/assets/images/og.png',
    },
    author,
    educations,
    experiences,
}
