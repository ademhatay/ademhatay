const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.setQuietMode(true);
    // Copy `assets/` to `_site/assets`
    eleventyConfig.addPassthroughCopy("src/assets");

    // Filter Function
    eleventyConfig.addFilter('count', array => array.length)
    eleventyConfig.addFilter('localeDate', date => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
        })
    });

    // calculate experience function
    eleventyConfig.addFilter('calculateExperience', (dateIn, dateOut, present) => {
        const currentDate = new Date();
        const startDate = new Date(dateIn);
        const endDate = present ? currentDate : new Date(dateOut);
    
        const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
        const monthsDiff = endDate.getMonth() - startDate.getMonth();
        const totalMonths = yearsDiff * 12 + monthsDiff;
    
        if (yearsDiff > 0) {
            if (monthsDiff > 0) {
                return `${yearsDiff} ${yearsDiff > 1 ? 'years' : 'year'} ${monthsDiff} ${monthsDiff > 1 ? 'months' : 'month'}`;
            } else {
                return `${yearsDiff} ${yearsDiff > 1 ? 'years' : 'year'}`;
            }
        } else {
            return `${totalMonths + 1} ${totalMonths > 1 ? 'months' : 'month'}`;
        }
    });

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            layouts: "_layouts"
        }
    };
};
