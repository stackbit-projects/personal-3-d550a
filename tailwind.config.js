const plugin = require('tailwindcss/plugin');
const themeStyle = require('./content/data/style.json');

module.exports = {
    presets: [require('@stackbit/components/styles/tailwind.default.config.js')],
    theme: {
        extend: {
            extend: {
                colors: {
                    body: themeStyle.body,
                    headlines: themeStyle.headlines,
                    primary: themeStyle.primary,
                    secondary: themeStyle.secondary,
                    neutral: themeStyle.neutral,
                    complementary: themeStyle.complementary,
                    'complementary-alt': themeStyle.complementaryAlt
                }
            }
        },
        variants: {
            extend: {}
        },
        plugins: []
    };