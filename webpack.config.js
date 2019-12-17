/**
 * This file has been autogenerated as it didn't exist or was made for an older
 * incompatible version.
 *
 * This file can be used for manual configuration. It will not be modified
 * if the flowDefaults constant exists.
 */
const merge = require("webpack-merge");
const flowDefaults = require("./webpack.generated.js");
const { GenerateSW } = require("workbox-webpack-plugin");
/**
 * To change the webpack config, add a new configuration object in
 * the merge arguments below:
 */
module.exports = merge(
  flowDefaults,
  {
    plugins: [
      new GenerateSW({
        swDest: "build/sw.js",
        importsDirectory: "build",
        globDirectory: "src/main/webapp",
        globPatterns: ["**"],
        exclude: [
          /\.map$/,
          /^manifest.*\.js$/,
          /\.js\.gz$/,
          /\.md$/,
          /\.json$/,
          /^index.html$/
        ],
        runtimeCaching: [
          {
            urlPattern: "/",
            handler: "NetworkFirst"
          }
        ]
      })
    ]
  }
);
