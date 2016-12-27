/* global CONF */
const MongoClient = require('mongodb').MongoClient
const db = CONF.db

const clazz = ['test']

module.exports = MongoClient.connect(`mongodb://${db.username}:${db.password}@${db.hosts}/${db.name}?${db.option.join('&')}`).then(DB => {
  clazz.forEach(c => (DB[c] = DB.collection(c)))
  return DB
})
