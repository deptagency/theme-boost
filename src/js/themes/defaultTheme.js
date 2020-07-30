const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    colors: {
        primary: {
            main: colors.indigo['500'],
            light: colors.indigo['200'],
            // medium: colors.indigo['600'],
            dark: colors.indigo['800'],
        },
        secondary: {
            main: colors.teal['500'],
            light: colors.teal['200'],
            // medium: colors.teal['600'],
            dark: colors.teal['800'],
        },
        neutral: {
            main: colors.white,
            100: colors.gray['100'],
            200: colors.gray['200'],
            300: colors.gray['300'],
            400: colors.gray['400'],
            500: colors.gray['500'],
            600: colors.gray['600'],
            700: colors.gray['700'],
            800: colors.gray['800'],
            900: colors.gray['900'],
        },
        system: {
            error: colors.red['700'],
            warning: colors.yellow['500'],
            green: colors.green['600'],
        },
        background: {
            primary: colors.white,
        },
    },
    borderRadius: {},
    baseFontSize: '16px',
    fontColor: colors.gray['800'],
    fontSize: {},
    smallDeg: '0deg',
}
