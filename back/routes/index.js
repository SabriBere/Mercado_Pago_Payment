const express = require("express")
const router = express.Router()
const products = require("./products")

router.use("/products", products)
router.get("/test", (req, res) =>{
    res.status(200).json("Funcionando")
})

module.exports = router