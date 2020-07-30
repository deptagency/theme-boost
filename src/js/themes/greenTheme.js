const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    colors: {
        primary: {
            main: colors.green['600'],
            light: colors.green['200'],
            dark: colors.green['700'],
        },
        secondary: {
            main: colors.blue['600'],
            light: colors.blue['100'],
            dark: colors.blue['700'],
        },
        neutral: {
            main: colors.gray['900'],
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
            green: colors.teal['600'],
        },
        background: {
            primary: colors.gray['900'],
        },
    },
    borderRadius: {
        none: '0',
        sm: '0.1rem',
        default: '0',
        md: '0.35rem',
        lg: '0.25rem',
        full: '9999px',
    },
    baseFontSize: '20px',
    fontColor: colors.green['100'],
    fontSize: {},
    smallDeg: '0deg',
}
