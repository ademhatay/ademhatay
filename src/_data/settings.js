const educations = require('./educations.js');
const experiences = require('./experiences.js');
module.exports = {
    siteMetaData: {
        siteTitle: 'Adem Hatay | Software Developer',
        siteUrl: 'https://ademhatay.com',
        siteDescription: 'Adem Hatay\'s personal website',
        siteImage: '/assets/images/og.png',
        author: '@ademhatay',
    },
    socialLinks: {
        twitter: 'https://twitter.com/hatayadem',
        github: 'https://github.com/ademhatay',
        linkedin: 'https://www.linkedin.com/in/ademhatay/',
        instagram: 'https://www.instagram.com/ademhatay_/',
        email: 'mailto:hatayadem5@gmail.com',
    },
    educations,
    experiences,
}
