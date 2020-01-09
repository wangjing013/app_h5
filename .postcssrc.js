// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {
    },
    "autoprefixer": {
      browsers: ['Android>= 4.0', 'ios >=8']
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['.cube-']
    }
  }
}
