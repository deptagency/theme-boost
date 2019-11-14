const path = require('path')

module.exports = async ({ config, mode }) => {
    // This is specific to storybook and does not make sense to extract
    config.resolve.modules.push(
        path.resolve(__dirname, '../'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../../../../../node_modules'),
        path.resolve(__dirname, '../node_modules'),
        'node_modules'
    )

    // Don't use Storybook's default SVG Configuration
    config.module.rules = config.module.rules.map((rule) => {
        if (rule.test.toString().includes('svg')) {
            const test = rule.test
                .toString()
                .replace('svg|', '')
                .replace(/\//g, '')
            return { ...rule, test: new RegExp(test) }
        } else {
            return rule
        }
    })

    // This is specific to storybook and does not make sense to extract
    config.module.rules.push({
        test: /\.woff2?$|\.otf?$|\.ttf$|\.eot$/,
        loader: 'file-loader',
    })

    config = require('../../../../catwalk/config/webpack/babel.js')(config)
    config = require('../../../../catwalk/config/webpack/loadCss.js')(config)
    config = require('../../../../catwalk/config/webpack/svgr.js')(config)

    // in case webpack config needs to be debugged
    //return console.dir(config, { depth: null }) || config
    return config
}
