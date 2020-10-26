const { colors } = require('tailwindcss/defaultTheme')

const getLayoutVariable = (property, defaultValue) => {
    // There might be a global layout variable injected by the build process.
    // If this is the case we use values from there. Thos values originate from
    // the data.layout section in config/project.yml
    // eslint-disable-next-line no-undef
    if (typeof layout !== 'undefined' && layout[property]) {
        // eslint-disable-next-line no-undef
        return layout[property]
    }

    return defaultValue
}

module.exports = {
    colors: {
        primary: {
            100: getLayoutVariable('themeColorsPrimary100', colors.indigo['100']),
            200: getLayoutVariable('themeColorsPrimary200', colors.indigo['200']),
            300: getLayoutVariable('themeColorsPrimary300', colors.indigo['300']),
            400: getLayoutVariable('themeColorsPrimary400', colors.indigo['400']),
            500: getLayoutVariable('themeColorsPrimary500', colors.indigo['500']),
            600: getLayoutVariable('themeColorsPrimary600', colors.indigo['600']),
            700: getLayoutVariable('themeColorsPrimary700', colors.indigo['700']),
            800: getLayoutVariable('themeColorsPrimary800', colors.indigo['800']),
            900: getLayoutVariable('themeColorsPrimary900', colors.indigo['900']),
        },
        secondary: {
            100: getLayoutVariable('themeColorsSecondary100', colors.teal['100']),
            200: getLayoutVariable('themeColorsSecondary200', colors.teal['200']),
            300: getLayoutVariable('themeColorsSecondary300', colors.teal['300']),
            400: getLayoutVariable('themeColorsSecondary400', colors.teal['400']),
            500: getLayoutVariable('themeColorsSecondary500', colors.teal['500']),
            600: getLayoutVariable('themeColorsSecondary600', colors.teal['600']),
            700: getLayoutVariable('themeColorsSecondary700', colors.teal['700']),
            800: getLayoutVariable('themeColorsSecondary800', colors.teal['800']),
            900: getLayoutVariable('themeColorsSecondary900', colors.teal['900']),
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
    fontFamily: getLayoutVariable('themeFontFamily', 'Helvetica Neue'),
}
