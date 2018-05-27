$ yarn global add live-server
$ live-server -v
live-server 1.2.0
$ yarn global add babel-cli
$ babel --version
6.26.0 (babel-core 6.26.3)

$ yarn init
==> create file package.json

$ yarn add babel-preset-react
$ yarn add babel-preset-env

$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

$ yarn install
// 如果把 node_modules 刪掉可以 install 回來，根據 package.json 中的 dependencies {}
