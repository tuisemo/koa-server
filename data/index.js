const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const data = low(adapter);

// Set some defaults (required if your JSON file is empty)
data.defaults({ posts: [], user: {}, count: 0 }).write();

class db {
  constructor() {}

  read() {
    return data.read();
  }
  write(key, value) {
    return data.set(key, value).write();
  }
}
module.exports = db;
