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
                '288px': '288px',
                '316px': '316px',
                '456px': '456px'
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
                '.tile-image-gradient': {
                    background: 'linear-gradient(38.36deg, #000000 0%, rgba(196, 196, 196, 0) 106.19%)'
                }
            }

            addUtilities(utilities)
        })
    ]
}
