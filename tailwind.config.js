const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
        enabled: process.env.WEBPACK_BUILD_ENV === 'prod',
        content: [
            './src/**/*.jsx',
            './src/**/*.tsx',
            './src/**/*.html',
            './src/**/*.ejs',
        ],
        options: {
            safelist: ['dark'],
        },
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            flex: {
                2: '2 2 0%',
            },
            colors: {
                accent: colors.green,
                bg: colors.gray[50],
                bg_dark: colors.gray[800],
                text: colors.gray[800],
                text_dark: colors.gray[200],
                text_main: colors.gray[900],
                text_main_dark: colors.gray[100],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
