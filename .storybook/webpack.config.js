const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = async ({ config, mode }) => {
    // This is specific to storybook and does not make sense to extract
    config.resolve.alias = {
        Atoms: path.resolve(__dirname, '../src/js/patterns/atoms'),
        Molecules: path.resolve(__dirname, '../src/js/patterns/molecules'),
        Organisms: path.resolve(__dirname, '../src/js/patterns/organisms'),
        Templates: path.resolve(__dirname, '../src/js/patterns/templates'),
        Icons: path.resolve(__dirname, '../src/js'),
    }
    
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
     * 1) `webpack-merge` doesn't work well with the way
     *    Storybook adds loaders (`rules.push()`) which makes
     *    our regular config not usable.
     * 2) There is a simple preset available (`@storybook/preset-scss`)
     *    which works great, but unfortunately misses the `resolve-url-loader`
     *    which we need when we want to reference assets from scss partials.
     * */
    config.module.rules.push({
        test: /(?<!\.module)\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    ident: 'postcss',
                    plugins: () => {
                        return [require('postcss-flexbugs-fixes'), require('tailwindcss'), autoprefixer()]
                    },
                },
            },
            'resolve-url-loader',
            'sass-loader',
        ],
    })
    config.module.rules.push({
        test: /\.module\.s?css$/,
        use: [
            'style-loader',
            { loader: 'css-loader', options: { modules: true } },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    ident: 'postcss',
                    plugins: () => {
                        return [require('postcss-flexbugs-fixes'), require('tailwindcss'), autoprefixer()]
                    },
                },
            },
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
