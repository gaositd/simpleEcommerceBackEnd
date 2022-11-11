const { cxn } = require('../../cxnMysql.js');

const reloaded = () => {
  cxn;
}

module.exports = reloaded;