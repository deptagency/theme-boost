const merge = require('webpack-merge')
const path = require('path')
const paths = require('@frontastic/catwalk/config/paths')
const autoprefixer = require('autoprefixer')

global.layout = {}
try {
    global.layout = require(paths.appSrc + '/js/settings.js')
} catch (e) {
    console.warn('Could not load project specific theming: ' + e)
}

module.exports = (config, PRODUCTION, SERVER) => {
    // Add some custom local aliases
    config = merge(config, {
        resolve: {
            alias: {
                Atoms: __dirname + '/src/js/patterns/atoms',
                Molecules: __dirname + '/src/js/patterns/molecules',
                Organisms: __dirname + '/src/js/patterns/organisms',
                Templates: __dirname + '/src/js/patterns/templates',
                Icons: __dirname + '/src/icons',
                boost: __dirname + '/src',
            },
        },
    })

    // Add tailwind configuration to SCSS compilation
    for (let rule of config.module.rules) {
        if (rule.use && Array.isArray(rule.use)) {
            for (let loader of rule.use) {
                if (loader.loader && loader.loader.match('postcss-loader') && loader.options) {
                    // @TODO: There is no way to sensibly adapt this plugin
                    // list in a callback, right? So we just overwrite it for
                    // now…
                    loader.options.plugins = () => {
                        return [
                            require('postcss-flexbugs-fixes'),
                            require('tailwindcss')(__dirname + '/tailwind.config.js'),
                            autoprefixer(),
                        ]
                    }
                }
            }
        }
    }

    return config
}
