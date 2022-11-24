const { product } = require("../../cxnMysql");
const { NOT_FOUND } = process.env;

const allProducts = async (req, res) => {
  let search = req.params.search;
  try {
    const products = await product.findAll();

    if (products.length) {
      res.status(200).json(products);
    } else {
      res.status(200).json({ msg: `${NOT_FOUND}` });
    }
  } catch (err) {
    res.status(500).json({ msg: `${err.message} ${err.stack}` });
  }
};

module.exports = allProducts;
