const educations = require('./educations.js');
const experiences = require('./experiences.js');
const author = require('./author.js');
module.exports = {
    meta: {
        siteTitle: 'Adem Hatay | Software Developer',
        siteUrl: 'https://ademhatay.com',
        siteDescription: 'Web and Mobile developer',
        siteImage: 'https://avatars.githubusercontent.com/u/66277966?v=4',
    },
    author,
    educations,
    experiences,
}
