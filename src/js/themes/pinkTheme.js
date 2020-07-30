const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    colors: {
        primary: {
            main: colors.pink['600'],
            light: colors.pink['200'],
            dark: colors.pink['700'],
        },
        secondary: {
            main: colors.gray['600'],
            light: colors.gray['400'],
            dark: colors.gray['800'],
        },
        neutral: {
            main: colors.gray['700'],
            100: colors.pink['100'],
            200: colors.pink['200'],
            300: colors.pink['300'],
            400: colors.pink['400'],
            500: colors.pink['500'],
            600: colors.pink['600'],
            700: colors.pink['700'],
            800: colors.pink['800'],
            900: colors.pink['900'],
        },
        system: {
            error: colors.red['700'],
            warning: colors.yellow['500'],
            green: colors.teal['600'],
        },
        background: {
            primary: colors.pink['100'],
        },
    },
    borderRadius: {
        none: '0',
        sm: '1.125rem',
        default: '1.25rem',
        md: '1.375rem',
        lg: '1.5rem',
        full: '9999px',
    },
    baseFontSize: '20px',
    fontColor: colors.pink['900'],
    fontSize: {},
    smallDeg: '0deg',
}
