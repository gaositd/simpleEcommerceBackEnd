const { Op } = require("sequelize");
const { product } = require("../../cxnMysql");
const { NOT_FOUND } = process.env;

const productId = async (req, res) => {
  let id = req.params.search;

  try {
    const product = await product.findAll({
      whrere: {
        id: {
          [Op.eq]: [`${id}`],
        },
      },
    });

    if (product.length) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ msg: `${NOT_FOUND}` });
    }
  } catch (err) {
    res.status(500).json({ msg: `${err.message} ${err.stack}` });
  }
};

module.exports = productId;
