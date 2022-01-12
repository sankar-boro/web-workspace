#!/usr/bin/env sh

cd ..
rm -rf ./node_modules
yarn add react react-dom

yarn add -D typescript \
@types/react \
@types/react-dom \
@babel/core \
@babel/preset-env \
@babel/preset-react \
@babel/preset-typescript \
@babel/plugin-transform-runtime \
@babel/runtime \
eslint \
eslint-plugin-react \
eslint-plugin-react-hooks \
@typescript-eslint/parser \
@typescript-eslint/eslint-plugin \
webpack \
webpack-cli \
@types/webpack \
webpack-dev-server \
@types/webpack-dev-server \
babel-loader \
ts-node \
fork-ts-checker-webpack-plugin \
@types/fork-ts-checker-webpack-plugin
