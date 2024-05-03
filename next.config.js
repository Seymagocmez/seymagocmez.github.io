const path = require('path')
 
 /** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}}