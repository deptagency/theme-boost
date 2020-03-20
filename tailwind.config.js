const plugin = require('tailwindcss/plugin')

module.exports = {
    theme: {
        extend: {
            borderWidth: {
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
                '1-auto': '1fr auto',
                '1-340': '1fr 340px',
                '2-auto': 'repeat(2, auto)',
                '2-max-content': 'repeat(2, max-content)',
                '120-3xfr': '120px 1fr 1fr 1fr',
            },
            gridTemplateRows: {
                'auto-1fr-auto': 'auto 1fr auto',
            },
            height: {
                'fix-132px': '132px',
                'fix-240px': '240px',
            },
            inset: {
                '3': '3rem',
                full: '100%',
            },
            maxHeight: {
                '316px': '316px',
            },
            maxWidth: {
                '192px': '192px',
                '480px': '480px',
                '1120px': '1120px',
                '1218px': '1218px',
            },
            spacing: {
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
            transitionDuration: {
                '20': '0.2s',
                '30': '0.3s',
            },
            transitionProperty: {
                visibility: 'visibility',
            },
            transitionTimingFunction: {
                'ease-out-expo': 'cubic-bezier(0.39, 0.58, 0.57, 1)',
            },
        },
    },
    plugins: [
        plugin(function({ addUtilities }) {
            const utilities = {
                '.justify-self-center': {
                    justifySelf: 'center',
                },
                '.justify-self-end': {
                    justifySelf: 'end',
                },
                '.translate-right': {
                    transform: 'translateX(0)',
                },
                '.translate-left': {
                    transform: 'translateX(-100%)',
                },
                '.webkit-transition': {
                    transitionProperty: '-webkit-transform',
                },
                '.hidden-override': {
                    display: 'none',
                },
                '.self-baseline': {
                    alignSelf: 'baseline',
                },
            }

            addUtilities(utilities)
        }),
    ],
    variants: {
        borderWidth: ['responsive', 'hover', 'focus'],
    },
}
