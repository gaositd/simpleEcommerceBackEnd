const { Router } = require("express");
const router = Router();
const cxn = require('../../cxnMysql');

const {TBL_CATEGORY} = process.env;

const getAllCategories = ('/', async(req, res)=> {
  try{
    const [rows, fields] = await cxn.execute(`SELECT * FROM ${TBL_CATEGORY}`);
    console.log(rows, fields);
  }catch(err){
    res.send({error: err.message});
  }
});

module.exports = getAllCategories;