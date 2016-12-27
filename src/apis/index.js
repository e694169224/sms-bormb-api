const fs = require('fs')

/** 自动扫描apis文件夹下的js文件，并暴露出去 */
module.exports = function (router) {
  let files = fs.readdirSync(__dirname)
  let js_files = files.filter((f) => {
    if (f === 'index.js') return
    return f.endsWith('.js')
  })

  js_files.forEach((js) => {
    console.log(js)
    require(__dirname + '/' + js)(router)
  })
}
