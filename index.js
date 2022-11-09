require('dotenv').config();
const server = require('./src/app.js');
// const cxn =
// const {}

const PORT = process.env.PORT || PORT_AUX;

server.listen(PORT,()=>{
  console.log(`listening on port ${PORT}`)
});