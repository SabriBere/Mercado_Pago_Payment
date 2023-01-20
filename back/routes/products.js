const express = require("express")
const router = express.Router()
const productsControllers = require("../controllers/productsControllers")

router.post("/newProduct", productsControllers.newProduct)

module.exports = router