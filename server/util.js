class Util {
  resFormat(data, code = 200, msg = '') {
    return {
      code,
      msg,
      data
    };
  }
}
module.exports = new Util();
