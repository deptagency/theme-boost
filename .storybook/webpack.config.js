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

    // This is specific to storybook and does not make sense to extract
    config.module.rules.push(
        {
            test: /\.woff2?$|\.otf?$|\.ttf$|\.eot$/,
            loader: 'file-loader',
        }
    )

    config = require('../../../../catwalk/config/webpack/babel.js')(config)
    config = require('../../../../catwalk/config/webpack/loadCss.js')(config)

    return config
}
