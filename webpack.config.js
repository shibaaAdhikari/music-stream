// webpack.config.js

const webpackConfig = {
  // Your existing webpack configuration...
  resolve: {
    alias: {
      // Some other alias configurations...
    },
    extensions: [".js", ".jsx"],
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  // Other webpack configuration options...
};

export default webpackConfig;
