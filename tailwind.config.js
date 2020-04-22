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
            fontSize: {
                'icon-size': '2.5rem',
            },
            gridTemplateColumns: {
                '1-340': '1fr 340px',
                '120-1xfr': '120px 1fr',
                '120-2xfr': '120px 1fr 1fr',
                '1.25rem-1fr-1.25rem-1fr-1.25rem': '1.25rem 1fr 1.25rem 1fr 1.25rem',
            },
            gridTemplateRows: {
                'auto-1fr': 'auto 1fr',
            },
            gridRowEnd: {
                'span-3': 'span 3',
            },
            gridColumnEnd: {
                'span-2': 'span 2',
                'span-3': 'span 3',
            },
            width: {
                '9': '2.25rem',
                'fix-560px': '560px',
            },
            height: {
                'fix-120px': '120px',
                'fix-240px': '240px',
                'full-84px': 'calc(100vh - 84px)'
            },
            inset: {
                full: '100%',
            },
            margin: {
                center: '0 auto',
            },
            maxHeight: {
                '316px': '316px',
                '736px': '736px',
            },
            maxWidth: {
                '192px': '192px',
                '960px': '960px',
                '1240px' : '1240px',
                '3/4': '75%',
            },
            minHeight: {
                '400px': '400px',
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
                    transform: 'translateX(-135%)',
                },
                '.webkit-transition': {
                    transitionProperty: '-webkit-transform',
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
