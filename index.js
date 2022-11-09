require('dotenv').config();
const server = require('./src/app.js');
const cxn = require('./src/cxnMysql');
// const {}

const PORT = process.env.PORT || PORT_AUX;

server.listen(PORT,()=>{
  console.log(`listening on port ${PORT}`)
});