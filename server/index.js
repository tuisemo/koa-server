const db = require('../data/index');
const shortid = require('shortid');

class Service {
  constructor() {}

  addUser(value) {
    return db.add('user', { ...value, id: shortid.generate() });
  }
  getUser(key) {
    return db.find('user', key);
  }
  getUsers() {
    return db.get('user');
  }
}
module.exports = new Service();
