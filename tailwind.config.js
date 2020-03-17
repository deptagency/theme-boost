const plugin = require('tailwindcss/plugin')

module.exports = {
    theme: {
        extend: {
            flex: {
                '0-0-05': '0 0 50%'
            },
            gridTemplateColumns: {
                '1-auto': '1fr auto',
                '1-340': '1fr 340px',
                '2-auto': 'repeat(2, auto)',
                '2-max-content': 'repeat(2, max-content)',
                '120-3xfr':'120px 1fr 1fr 1fr',
            },
            gridTemplateRows: {
                'auto-1fr-auto': 'auto 1fr auto',
            },
            gridRowEnd: {
                'span-3': 'span 3',
            },
            gridColumnEnd: {
                'span-2': 'span 2',
                'span-3': 'span 3',
            },
            height: {
                'fix-132px': '132px',
                'fix-240px': '240px',
            },
            maxHeight: {
                '316px': '316px',
            },
            maxWidth: {
                '192px': '192px',
                '480px': '480px',
                '1120px': '1120px',
                '1218px' : '1218px',
            },
            transitionProperty: {
                'visibility': 'visibility',
            },
            inset: {
                '3': '3rem',
                'full': '100%'
            },
            transitionDuration: {
                '20': '0.2s',
                '30': '0.3s'
            },
            transitionTimingFunction: {
                'ease-out-expo': 'cubic-bezier(0.39, 0.58, 0.57, 1)',
            },
            borderWidth: {
                '2px': '2px',
                '3px': '3px'
            }
        }
    },
    plugins: [
        plugin(function({ addUtilities }) {
            const utilities = {
                '.justify-self-center': {
                    justifySelf: 'center'
                },
                '.justify-self-end': {
                    justifySelf: 'end'
                },
                '.translate-right': {
                    'transform': 'translateX(0)'
                },
                '.translate-left': {
                    'transform': 'translateX(-100%)'
                },
                '.webkit-transition': {
                    transitionProperty: '-webkit-transform'
                },
                '.hidden-override': {
                    display: 'none'
                },
                '.self-baseline': {
                    alignSelf: 'baseline'
                }
            }

            addUtilities(utilities)
        })
    ],
    variants: {
      borderWidth: ['responsive', 'hover', 'focus'],
    }
}
