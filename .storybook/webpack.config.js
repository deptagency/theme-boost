const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = async ({ config, mode }) => {
    // This is specific to storybook and does not make sense to extract
    config.resolve.modules.push(
        path.resolve(__dirname, '../'),
        path.resolve(__dirname, '../src')
        //path.resolve(__dirname, './../../../../../node_modules'),
        //path.resolve(__dirname, '../node_modules')
        //'node_modules'
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

    config.module.rules.push({
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            cacheDirectory: true,
            rootMode: 'upward',
        },
    })

    /**
     * The sass-loader is in here for two reasons:
     *
     * 1) `webpack-merge` doesn't work well with teh way
     *    Storybook adds loaders (`rules.push()`) which makes
     *    our regular config not usable.
     * 2) There is a simple preset available (`@storybook/preset-scss`)
     *    which works great, but unfortunately misses the `resolve-url-loader`
     *    which we need when we want to reference assets from scss partials.
     * */
    config.module.rules.push({
        test: /\.scss$/,
        oneOf: [
            {
                include: /(js)/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true } },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: (loaderContext) => {
                                return { includePaths: ['src/scss'] }
                            },
                        },
                    },
                ],
            },
            {
                use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
            },
        ],
        //include: path.resolve(__dirname, '../'),
    })

    // This is specific to storybook and does not make sense to extract
    config.module.rules.push({
        test: /\.woff2?$|\.otf?$|\.ttf$|\.eot$/,
        loader: 'file-loader',
    })

    config.module.rules.push({
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
            test: /\.jsx?$|\.mdx?$/,
        },
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                },
            },
            'url-loader',
        ],
    })

    config.module.rules.push({
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader'],
    })

    // in case webpack config needs to be debugged
    //return console.dir(config, { depth: null }) || config
    return config
}
