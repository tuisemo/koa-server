const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');
const adapter = new FileSync(path.resolve('data/db.json'));
const data = low(adapter);

// Set some defaults (required if your JSON file is empty)
data.defaults({ posts: [], user: [], count: 0 }).write();

class DB {
  constructor() {}

  get(key) {
    return data.get(key).value();
  }
  find(key, condition) {
    return data
      .get(key)
      .find(condition)
      .value();
  }
  write(key, value) {
    return data.set(key, value).write();
  }
  add(key, value) {
    return data
      .get(key)
      .push(value)
      .write();
  }
}
module.exports = new DB();
