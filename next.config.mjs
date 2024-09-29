/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "res.cloudinary.com",
      "via.placeholder.com",
    ], // Existing image domain configuration
  },
  webpack(config) {
    // Add a loader for handling video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/, // File types for video handling
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/", // Path where videos will be served
          outputPath: "static/videos/", // Output path where videos will be stored
          name: "[name].[ext]", // Keep original name and extension
          esModule: false, // Disable ES module system for file-loader
        },
      },
    });

    return config;
  },
};

export default nextConfig;
