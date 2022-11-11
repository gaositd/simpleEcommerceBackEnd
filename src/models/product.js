const { DataTypes } = require('sequelize');

module.exports =(sequelize) => {
  sequelize.define('product',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    url_image:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    price:{
      type:DataTypes.FLOAT,
      allowNull:false
    },
    discount:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    category:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  })
}