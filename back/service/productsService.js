const Products = require("../models/Products")

class productsService {
    static async newProduct(body){
        // console.log(body)
        const {title, description, price} = await body
        try {
            const product = await Products.create({title: title, description: description, price: price })
        return { error: false, data: product }
            
        } catch (error) {
            return {error: true, data: error.message}
        }
    }

}

module.exports = productsService