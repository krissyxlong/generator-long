const CompressionPlugin = require('compression-webpack-plugin');

const env = process.env.NODE_ENV;

const vueConfigs = {};

// chainWebpack
vueConfigs.chainWebpack = (config) => {
  config.plugin('html').tap((args) => {
    args[0].title = 'vue demo'; // 修改 document title
    return args;
  });
  // and this line
  config.plugin('CompressionPlugin').use(CompressionPlugin);
};

vueConfigs.configureWebpack = {
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 10000,
      vue: {
        test: /[\\/]node_modules[\\/](vue|vuex|vue-router|@vue)[\\/]/,
        priority: 20,
        name: 'vue',
      },
      vendor: {
        test: /[\\/]node_modules[\\/](!vue)(!vuex)(!vue-router)(!(@vue))[\\/]/,
        name: 'vendor',
      },
    },
  },
};

if (env === 'development') {
  vueConfigs.configureWebpack = {
    devtool: 'source-map',
  };
}
module.exports = vueConfigs;
