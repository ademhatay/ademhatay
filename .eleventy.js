const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.setQuietMode(true);
    // Copy `assets/` to `_site/assets`
    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            layouts: "_layouts"
        }
    };
};
