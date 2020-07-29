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
            100: colors.gray['900'],
            200: colors.gray['800'],
            300: colors.gray['700'],
            400: colors.gray['600'],
            500: colors.gray['500'],
            600: colors.gray['400'],
            700: colors.gray['300'],
            800: colors.gray['200'],
            900: colors.gray['100'],

            /*100: colors.gray['100'],
            200: colors.gray['200'],
            300: colors.gray['300'],
            400: colors.gray['400'],
            500: colors.gray['500'],
            600: colors.gray['600'],
            700: colors.gray['700'],
            800: colors.gray['800'],
            900: colors.gray['900'],*/
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
    boxShadow: {
        xs: '0 0 0 1px rgba(255, 255, 255, 0.05)',
        sm: '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
        default: '0px 1px 2px rgba(255, 255, 255, 0.06), 0px 1px 3px rgba(255, 255, 255, 0.1)',
        md: '0px 2px 4px rgba(255, 255, 255, 0.05), 0px 4px 6px rgba(255, 255, 255, 0.05)',
        lg: '0px 10px 15px rgba(255, 255, 255, 0.05), 0px 4px 6px rgba(255, 255, 255, 0.05)',
        xl: '0px 20px 25px rgba(255, 255, 255, 0.1), 0px 10px 10px rgba(255, 255, 255, 0.04)',
        '2xl': '0px 25px 50px rgba(255, 255, 255, 0.25)',
        inner: 'inset 0px 2px 4px rgba(255, 255, 255, 0.06);',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
    },
    fontColor: colors.green['100'],
    fontSize: {},
    smallDeg: '0deg',
}
