const fs = require('fs')

/* 自动读取cofig 目录下的相应环境的配置 */
module.exports = function () {
  let config = {}
  const files = fs.readdirSync(__dirname + '\\' + `${process.env.NODE_ENV || 'dev'}`)

  files.forEach((fileName) => {
    let key = fileName.split('.')[0]
    config[key] = require(__dirname + '\\' + `${process.env.NODE_ENV || 'dev'}` + '\\' + key)
  })
  return config
}
