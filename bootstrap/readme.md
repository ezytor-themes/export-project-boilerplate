## Folder & file structure

1. `public` : all pages are stored here. You can directly open with browser for real view. Inside  `public` directory , there is a `assets` directory for js  and compiled css files.
2. `scss`: all scss files are stored there.
3. `gruntfile.js`: this file for removing all unused css from your compiled css file. You can just run `npm run cleancss` for removing unused css from `public/assets/css/app.css`;
4. `package.json`: all required  packages. We have used a package called [`bunddle-master`](https://github.com/WP-Plugin-Master/bundle-master). we developed it for nicely writing webpack config. we will add support for Vite js soon.
5. `webpack.config.js`: for writing webpack config nicely & cleanly with [`bunddle-master`](https://github.com/WP-Plugin-Master/bundle-master).


## setup

1. `npm i`
2. `npm run dev` for compiling css as development mode
3. `npm run watch` for compiling css as development mode and watch changes.
4. `npm run cleancss` for removing unused css code form compiled css file located in `public/assetc/css/app.css`. we have used `grunt-uncss` npm package.


### Visit [Ezytor.com](https://ezytor.com) for more information.