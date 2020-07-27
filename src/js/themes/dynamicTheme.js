const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    colors: {
        primary: {
            main: colors.blue['700'],
            light: colors.blue['200'],
            medium: colors.blue['600'],
            dark: colors.blue['800'],
        },
        secondary: {
            main: colors.orange['500'],
            light: colors.orange['200'],
            medium: colors.orange['600'],
            dark: colors.orange['800'],
        },
        neutral: {
            main: colors.white,
            100: colors.red['100'],
            200: colors.red['200'],
            300: colors.red['300'],
            400: colors.red['400'],
            500: colors.red['500'],
            600: colors.red['600'],
            700: colors.red['700'],
            800: colors.red['800'],
            900: colors.red['900'],
        },
        system: {
            error: colors.red['700'],
            warning: colors.yellow['500'],
            green: colors.green['600'],
        },
        background: {
            primary: colors.red['100'],
        },
    },
    borderRadius: {
        default: '5.2rem',
        sm: '11.3rem',
        lg: '6.3rem',
        xl: '10.3rem',
        full: '9999px',
    },
    fontSize: {},
    smallDeg: '-40deg',
}
