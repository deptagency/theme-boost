const plugin = require('tailwindcss/plugin')

module.exports = {
    theme: {
        extend: {
            flex: {
                '0-0-05': '0 0 50%'
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
            },
            transitionProperty: {
                'visibility': 'visibility',
            },
            inset: {
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
                }
            }

            addUtilities(utilities)
        })
    ],
    variants: {
      borderWidth: ['responsive', 'hover', 'focus'],
    }
}
