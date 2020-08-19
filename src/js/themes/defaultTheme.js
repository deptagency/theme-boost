const { colors } = require('tailwindcss/defaultTheme')

const getLayoutVariable = (property, defaultValue) => {
    // There might be a global layout variable injected by the build process.
    // If this is the case we use values from there. Thos values originate from
    // the data.layout section in config/project.yml
    if ((typeof layout !== 'undefined') && layout[property]) { // eslint-disable-line no-undef
        return layout[property] // eslint-disable-line no-undef
    }

    return defaultValue
}

module.exports = {
    colors: {
        primary: {
            main: getLayoutVariable('themeColorsPrimaryMain', colors.indigo['500']),
            light: getLayoutVariable('themeColorsPrimaryLight', colors.indigo['200']),
            dark: getLayoutVariable('themeColorsPrimaryDark', colors.indigo['800']),
        },
        secondary: {
            main: getLayoutVariable('themeColorsSecondaryMain', colors.teal['500']),
            light: getLayoutVariable('themeColorsSecondaryLight', colors.teal['200']),
            dark: getLayoutVariable('themeColorsSecondaryDark', colors.teal['800']),
        },
        neutral: {
            100: getLayoutVariable('themeColorsNeutral100', colors.gray['100']),
            200: getLayoutVariable('themeColorsNeutral200', colors.gray['200']),
            300: getLayoutVariable('themeColorsNeutral300', colors.gray['300']),
            400: getLayoutVariable('themeColorsNeutral400', colors.gray['400']),
            500: getLayoutVariable('themeColorsNeutral500', colors.gray['500']),
            600: getLayoutVariable('themeColorsNeutral600', colors.gray['600']),
            700: getLayoutVariable('themeColorsNeutral700', colors.gray['700']),
            800: getLayoutVariable('themeColorsNeutral800', colors.gray['800']),
            900: getLayoutVariable('themeColorsNeutral900', colors.gray['900']),
        },
        system: {
            error: getLayoutVariable('themeColorsSystemError', colors.red['700']),
            warning: getLayoutVariable('themeColorsSystemWarning', colors.yellow['500']),
            green: getLayoutVariable('themeColorsSystemGreen', colors.green['600']),
        },
        background: {
            primary: getLayoutVariable('themeColorsBackgroundPrimary', colors.white),
        },
    },
    borderRadius: getLayoutVariable('themeBoxBorderRadius', {}),
    baseFontSize: getLayoutVariable('themeFontBaseSize', '16px'),
    boxShadow: getLayoutVariable('themeBoxShadow', {}),
    fontColor: getLayoutVariable('themeFontColor', colors.gray['800']),
    fontSize: getLayoutVariable('themeFontSize', {}),
}
