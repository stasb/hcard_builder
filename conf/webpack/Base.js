'use strict';

const path = require('path');
const npmBase = path.join(__dirname, '../../node_modules');
const autoprefixer = require('autoprefixer');

class WebpackBaseConfig {
  constructor() {
    this._config = {};
  }

  get includedPackages() {
    return [].map((pkg) => path.join(npmBase, pkg));
  }

  /**
   * Set the config data.
   * This will always return a new config
   * @param {Object} data Keys to assign
   * @return {Object}
   */
  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data);
    return this._config;
  }

  /**
   * Get the global config
   * @param {Object} config Final webpack config
   */
  get config() {
    return this._config;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dev';
  }

  /**
   * Get the absolute path to src directory
   * @return {String}
   */
  get srcPathAbsolute() {
    return path.resolve('./src');
  }

  /**
   * Get the absolute path to tests directory
   * @return {String}
   */
  get testPathAbsolute() {
    return path.resolve('./test');
  }

  /**
   * Get the default settings
   * @return {Object}
   */
  get defaultSettings() {
    return {
      context: this.srcPathAbsolute,
      debug: true,
      devtool: 'eval',
      devServer: {
        contentBase: './src/',
        publicPath: '/assets/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8000
      },
      entry: './index.js',
      module: {
        preLoaders: [
          {
            test: /\.(js|jsx)$/,
            include: this.srcPathAbsolute,
            loader: 'eslint'
          }
        ],
        loaders: [
          {
            test: /\.cssmodule\.css$/,
            loaders: [
              'style',
              'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]'
            ]
          },
          {
            test: /^.((?!cssmodule).)*\.css$/,
            loaders: [
              'style',
              'css'
            ]
          },
          {
            test: /\.cssmodule\.(sass|scss)$/,
            loaders: [
              'style',
              'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
              'sass'
            ]
          },
          {
            test: /^.((?!cssmodule).)*\.(sass|scss)$/,
            loaders: [
              'style',
              'css',
              'sass'
            ]
          },
          {
            test: /\.cssmodule\.less$/,
            loaders: [
              'style',
              'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
              'less'
            ]
          },
          {
            test: /^.((?!cssmodule).)*\.less$/,
            loaders: [
              'style',
              'css',
              'less'
            ]
          },
          {
            test: /\.cssmodule\.styl$/,
            loaders: [
              'style',
              'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
              'stylus'
            ]
          },
          {
            test: /^.((?!cssmodule).)*\.styl$/,
            loaders: [
              'style',
              'css',
              'stylus'
            ]
          },
          {
            test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
            loader: 'url-loader?limit=200000'
          },
          { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
          { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
          { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
          { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
          { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' },
          {
            test: /\.json$/,
            loaders: 'json'
          },
          {
            test: /\.(js|jsx)$/,
            include: [].concat(
              this.includedPackages,
              [this.srcPathAbsolute]
            ),
            loaders: ['react-hot', 'babel']
          }
        ]
      },
      output: {
        path: path.resolve('./dist/assets'),
        filename: 'app.js',
        publicPath: './assets/'
      },
      plugins: [],
      resolve: {
        alias: {
          actions: `${this.srcPathAbsolute}/actions/`,
          components: `${this.srcPathAbsolute}/components/`,
          config: `${this.srcPathAbsolute}/config/${this.env}.js`,
          images: `${this.srcPathAbsolute}/images/`,
          sources: `${this.srcPathAbsolute}/sources/`,
          store: `${this.srcPathAbsolute}/store/`,
          styles: `${this.srcPathAbsolute}/styles/`
        },
        extensions: ['', '.js', '.jsx'],
        modules: [
          this.srcPathAbsolute,
          'node_modules'
        ]
      }
    };
  }
}

module.exports = WebpackBaseConfig;
