const path = require('path');
const workboxPlugin = require('workbox-webpack-plugin');

const cacheId = 'service-worker-sample'

module.exports = {
  mode: 'production',
  entry: './public/service-worker/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/service-worker')
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ]
  },
  plugins: [
    new workboxPlugin.GenerateSW({
      cacheId: cacheId,
      runtimeCaching: [
        {
          urlPattern: 'https://workers-419d8.firebaseapp.com/service-worker/index.html',
          handler: "NetworkFirst",
          options: {
            cacheName: cacheId + "-html-cache",
            expiration: {
              maxAgeSeconds: 60 * 60,
            }
          }
        },
      ],
      swDest: __dirname + '/public/service-worker/sw.js'
    })
  ],
};