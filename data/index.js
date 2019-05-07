import low from 'lowdb';
const data = low('db.json');

class db {
  constructor() {}

  get(key) {
    data.get(key).value();
  }
  set(key, value) {
    data.set(key, value).write();
  }
}
export default db;
