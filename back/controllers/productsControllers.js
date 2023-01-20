const productsService = require("../service/productsService")

class productsControllers {
    static async newProduct(req, res)  {
        console.log(req.body)
        const { error, data } = await productsService.newProduct(req.body);
        if (error) return res.status(400).json({ data });
        res.status(200).json({ data });
    }

}

module.exports = productsControllers