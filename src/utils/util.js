export const replaceUrl = (function () {
  var reg = /http:\/\/img.meiguowangluo.com\//ig
  var url = 'http://img.funve.com/'
  return function (str) {
    if (str == null) {
      return ''
    }
    return str.replace(reg, url)
  }
})()
