const { Op } = require("sequelize");
const { product } = require("../../cxnMysql");
const { NOT_FOUND } = process.env;

const getProductList = async (req, res) => {
  let search = req.params.search;

  try {
    // const data = await product.findAll({
    //   whrere: {
    //     name: {
    //       [Op.like]: [`${search.toUpperCase()}`],
    //     },
    //   },
    // });

    const data = await product.findAll();

    let productList = data.map((list) => {
      list.name = list.name.toUpperCase();
      return list;
    });

    productList = data.filter((list) => {
      if (list.dataValues.name.includes(search.toUpperCase())) {
        return list;
      }
    });

    if (productList.length) {
      res.status(200).json(productList);
    } else {
      res.status(200).json({ msg: `${NOT_FOUND}` });
    }
  } catch (err) {
    res.status(500).json({ msg: `${err.message} ${err.stack}` });
  }
};

module.exports = getProductList;
