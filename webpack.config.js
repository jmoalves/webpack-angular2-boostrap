var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function() {
    return {
        entry: {
            polyfills: './src/polyfills.ts',
            app: './src/app/main.ts'
        },

        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                // the url-loader uses DataUrls.
                // the file-loader emits files.
                { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },

                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.tsx?$/, loader: "angular2-template-loader!awesome-typescript-loader" },

                { test: /\.css$/, loaders: 'style-loader!css-loader' },

                { test: /\.html$/, loaders: 'html-loader' },

                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),

            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),

            new webpack.optimize.CommonsChunkPlugin({
                name: ["app", "polyfills", "vendor"],
                minChunks: function(module) {
                    return module.context && module.context.indexOf("node_modules") !== -1;
                }
            }),

            new webpack.optimize.CommonsChunkPlugin({
                name: "manifest",
                minChunks: Infinity
            }),

            new HtmlWebpackPlugin({
                template: 'src/index.html'
            })
        ]
    };
}