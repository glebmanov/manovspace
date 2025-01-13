const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { NODE_ENV } = process.env || 'production';

module.exports = {
  mode: NODE_ENV,

  context: path.join(__dirname, './src'),

  entry: {
    application: ['./index.tsx'],
  },

  output: {
    path: path.resolve(__dirname, '../priv/static/assets'),
    filename: '[name].js',
  },

  optimization: {
    minimize: NODE_ENV === 'production',
  },

  devtool: NODE_ENV === 'development' ? 'source-map' : false,

  watch: NODE_ENV === 'development',

  stats: {
    assets: false,
    modules: false,
    warnings: false,
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [path.join(__dirname, '../priv/static/assets/**/*.LICENSE.txt')],
      dry: false,
      verbose: false,
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      client: path.resolve(__dirname, 'src/client'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      store: path.resolve(__dirname, 'src/store'),
      types: path.resolve(__dirname, 'src/types'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, '../priv/static'),
      watch: true,
    },
    liveReload: true,
    port: 8080,
  },
};
