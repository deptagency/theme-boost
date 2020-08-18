const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    colors: {
        primary: {
            main: layout.themeColorsPrimaryMain || colors.indigo['500'],
            light: layout.themeColorsPrimaryLight || colors.indigo['200'],
            dark: layout.themeColorsPrimaryDark || colors.indigo['800'],
        },
        secondary: {
            main: layout.themeColorsSecondaryMain || colors.teal['500'],
            light: layout.themeColorsSecondaryLight || colors.teal['200'],
            dark: layout.themeColorsSecondaryDark || colors.teal['800'],
        },
        neutral: {
            100: layout.themeColorsNeutral100 || colors.gray['100'],
            200: layout.themeColorsNeutral200 || colors.gray['200'],
            300: layout.themeColorsNeutral300 || colors.gray['300'],
            400: layout.themeColorsNeutral400 || colors.gray['400'],
            500: layout.themeColorsNeutral500 || colors.gray['500'],
            600: layout.themeColorsNeutral600 || colors.gray['600'],
            700: layout.themeColorsNeutral700 || colors.gray['700'],
            800: layout.themeColorsNeutral800 || colors.gray['800'],
            900: layout.themeColorsNeutral900 || colors.gray['900'],
        },
        system: {
            error: layout.themeColorsSystemError || colors.red['700'],
            warning: layout.themeColorsSystemWarning || colors.yellow['500'],
            green: layout.themeColorsSystemGreen || colors.green['600'],
        },
        background: {
            primary: layout.themeColorsBackgroundPrimary || colors.white,
        },
    },
    borderRadius: {},
    baseFontSize: layout.themeFontBaseSize || '16px',
    boxShadow: {},
    fontColor: layout.themeFontColor || colors.gray['800'],
    fontSize: {},
}
