const {DataTypes, Model} = require("sequelize")
const db = require("../db/db")


class Products extends Model{}

Products.init(
    {
        title:{
            type: DataTypes.STRING,
            unique: true
        },
        description:{
            type: DataTypes.STRING,
        },
        photo:{
            type: DataTypes.TEXT,
            validate:{
                isUrl: true
            }
        },
        price:{
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize: db,
        modelName: "products"
    }
)

Products.sync({force: false})
module.exports = Products

