const plugin = require('tailwindcss/plugin')
const { colors, borderRadius, smallDeg, fontSize } = require('./src/js/themes/defaultTheme')
// const { colors, borderRadius, smallDeg, fontSize } = require('./src/js/themes/dynamicTheme')
// const { colors, borderRadius, smallDeg, fontSize } = require('./src/js/themes/calmingTheme')


module.exports = {
    theme: {
        extend: {
            /* PART OF THEME */
            colors,
            borderRadius,
            fontSize: {
                'icon-size': '2.5rem',
                ... fontSize
            },
            /* END OF PART THEME */
            borderWidth: {
                '0.5px': '0.5px',
                '2px': '2px',
                '3px': '3px',
            },
            flex: {
                '0-0-05': '0 0 50%',
            },
            gridColumnEnd: {
                'span-2': 'span 2',
                'span-3': 'span 3',
            },
            gridRowEnd: {
                'span-3': 'span 3',
            },
            gridTemplateColumns: {
                '1-340': '1fr 340px',
                '120-1xfr': '120px 1fr',
                '120-2xfr': '120px 1fr 1fr',
                '1fr-2fr': '1fr 2fr',
                '1.25rem-1fr-1.25rem-1fr-1.25rem': '1.25rem 1fr 1.25rem 1fr 1.25rem',
            },
            gridTemplateRows: {
                'auto-1fr': 'auto 1fr',
                'auto-1fr-auto': 'auto 1fr auto'
            },
            height: {
                'fix-120px': '120px',
                'fix-240px': '240px',
                'full-84px': 'calc(100vh - 84px)',
            },
            inset: {
                full: '100%',
                '3.3': '3.3rem'
            },
            margin: {
                center: '0 auto',
            },
            maxHeight: {
                '316px': '316px',
                '736px': '736px',
            },
            maxWidth: {
                '124px': '124px',
                '192px': '192px',
                '960px': '960px',
                '1240px': '1240px',
                '3/4': '75%',
            },
            minHeight: {
                '354px': '354px',
                '400px': '400px',
            },
            spacing: {
                '2px': '2px',
                '100': '25rem',
                '160': '40rem',
                '1/2': '50%',
                '3/2': '150%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
            transitionProperty: {
                visibility: 'visibility',
                height: 'height',
            },
            transitionDuration: {
                '20': '0.2s',
                '30': '0.3s',
            },
            transitionTimingFunction: {
                'ease-out-expo': 'cubic-bezier(0.39, 0.58, 0.57, 1)',
            },
            width: {
                '9': '2.25rem',
                'fix-250px': '250px',
                'fix-488px': '488px',
                'fix-560px': '560px',

            },
        },
    },
    plugins: [
        plugin(function({ addUtilities }) {
            const utilities = {
                '.bg-transparent-50': {
                    backgroundColor: 'rgba(253, 250, 250, 0.5)'
                },
                '.border-bottom-solid': {
                    borderBottomStyle: 'solid',
                },
                '.border-bottom-system-error' : {
                    borderBottomColor: colors.system.error,
                },
                '.border-x-transparent': {
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent'
                },
                '.justify-self-center': {
                    justifySelf: 'center',
                },
                '.justify-self-end': {
                    justifySelf: 'end',
                },
                '.justify-items-center': {
                    justifyItems: 'center',
                },
                '.translate-right': {
                    transform: 'translateX(0)',
                },
                '.translate-left': {
                    transform: 'translateX(-135%)',
                },
                '.webkit-transition': {
                    transitionProperty: '-webkit-transform',
                },
                '.self-baseline': {
                    alignSelf: 'baseline',
                },
                /* PART OF THEME */
                '.rotate-sm': {
                    transform: `rotate(${smallDeg})`,
                },
                /* END OF PART OF THEME */
            }

            addUtilities(utilities)
        }),
    ],
    variants: {
        borderWidth: ['responsive', 'hover', 'focus'],
        textColor: ['active'],
    },
}
