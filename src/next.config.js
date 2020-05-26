const {withPlugins} = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');
const images = require('next-images');
// const optimizedImages = require('next-optimized-images');

const nextConfig = {
    useFileSystemPublicRoutes: true,
    distDir: 'build',
};

module.exports = withPlugins([
  // [optimizedImages, {
  //     handleImages: ['jpeg', 'png'],
  // }],
  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: '[local]___[hash:base64:5]',
    },
  }],
  [css, {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: '[local]___[hash:base64:5]',
    },
  }],
  images
], nextConfig);
