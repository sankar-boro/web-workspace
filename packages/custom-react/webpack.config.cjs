/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const findPackages = require('../../scripts/findPackages.cjs');

function createWebPack() {
  const alias = findPackages().reduce((alias, { dir, name }) => {
    alias[name] = path.resolve(__dirname, `../${dir}/src`);

    return alias;
  }, {});
  console.log(alias);
  return {
    mode: "production",
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [ ".js", ".jsx", ".tsx", ".ts", ".mjs"],
      alias: {
        ...alias,
        'react/jsx-runtime': require.resolve('react/jsx-runtime')
      },
    },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "index.js",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 3000,
      hot: true,
    }
  }
}

module.exports = createWebPack;