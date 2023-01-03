const express = require("express")
const router = express.Router()

const customerController  = require("../controllers/customerController")
const orderController = require("../controllers/orderController")

router.post("/createCustomer", customerController.createCustomer)
router.post("/login", customerController.loginCustomer)
router.post("/createOrder", orderController.createOrder)



router.all( "/*",(req, res)=>{
    console.log("Make sure route path is correct ")
    res.send("Make sure route path is correct")
})

module.exports= router