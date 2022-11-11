const { category } = require("../../cxnMysql");

const {TBL_CATEGORY, NOT_FOUND} = process.env;

async function getAllCategories(req, res) {
  try{
    const allCategories = category.findAll();

    if(allCategories.length){
      res
        .status(200)
        .json(allCategories);
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

module.exports = getAllCategories;