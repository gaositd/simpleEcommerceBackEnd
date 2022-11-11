const { Op } = require("sequelize");
const { product } = require('../../cxnMysql');
const { NOT_FOUND } = process.env;

const getProductList = async (req, res) =>{
  let search = req.params.search;
  search = search.toUpperCase();
  try{
    const productList = await product.findAll({
      whrere:{
        name:{
          // [Op.contains]: `search`
          [Op.substring]: search
        }
      }
    });

    if(productList.length){
      const result = 
      res
        .status(200)
        .json(productList);
    }else{
      res
        .status(404)
        .json({msg: `${NOT_FOUND}`});
    }
  }catch(err){
    res
        .status(500)
        .json({msg: `${err.message}`});
  }
}

module.exports = getProductList;