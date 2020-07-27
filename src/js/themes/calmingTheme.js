const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    colors: {
        primary: {
            main: colors.orange['700'],
            light: colors.orange['200'],
            medium: colors.orange['600'],
            dark: colors.orange['800'],
        },
        secondary: {
            main: colors.teal['500'],
            light: colors.teal['200'],
            medium: colors.teal['600'],
            dark: colors.teal['800'],
        },
        neutral: {
            main: colors.white,
            100: colors.green['100'],
            200: colors.green['200'],
            300: colors.green['300'],
            400: colors.green['400'],
            500: colors.green['500'],
            600: colors.green['600'],
            700: colors.green['700'],
            800: colors.green['800'],
            900: colors.green['900'],
        },
        system: {
            error: colors.green['700'],
            warning: colors.yellow['500'],
            green: colors.green['600'],
        },
        background: {
            primary: colors.teal['100'],
        },
    },
    borderRadius: {
        default: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '8rem',
        full: '9999px',
    },
    fontSize: {
        'xs': '.65rem',
        'sm': '.775rem',
        'base': '0.9rem',
        'lg': '1.025rem',
        'xl': '1.15rem',
        '2xl': '1.4rem',
        '3xl': '1.775rem',
        '4xl': '2.15rem',
        '5xl': '2.9rem',
        '6xl': '3.9rem',
    },
    smallDeg: '15deg',
}
