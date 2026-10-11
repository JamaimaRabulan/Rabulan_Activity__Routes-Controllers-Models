import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";


const Product = sequelize.define("product", {
    name: {type: DataTypes.STRING,allowNull: false},
    description: {type: DataTypes.STRING,allowNull: false},
    category: {type: DataTypes.STRING,allowNull: false},
    price: {type: DataTypes.FLOAT,allowNull: false},
    stock: {type: DataTypes.INTEGER,allowNull: false}
});


export default Product;