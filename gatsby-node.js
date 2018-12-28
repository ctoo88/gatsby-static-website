// custom webpack config

const config = {
  devtool: process.env.NODE_ENV === 'development' && 'inline-source-map',
};

if (process.env.NODE_ENV === 'production') {
  config.optimization = {
    runtimeChunk: false,
  }
}

exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, actions }) => {
  actions.setWebpackConfig(config);
};
