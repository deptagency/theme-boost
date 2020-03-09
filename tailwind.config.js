const plugin = require('tailwindcss/plugin')

module.exports = {
    theme: {
        extend: {
            height: {
                'fix-240px': '240px',
            }
        }
    },
    plugins: [
        plugin(function({ addUtilities }) {
            const gridJustifySelf = {
                '.justify-self-center': {
                    justifySelf: 'center'
                },
                '.justify-self-end': {
                    justifySelf: 'end'
                },

            }

            addUtilities(gridJustifySelf)
        })
    ]
}
