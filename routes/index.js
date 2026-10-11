
import express from "express";
import { homePage } from "../controllers/homeController.js";
import jamai from "./jamai.js";
import { mycontroller } from "../controllers/mycontroller.js";
import test from "../controllers/test.js";
import product from "../controllers/product.js";

// Activity1 Controllers
import productController from "../controllers/productController.js";
import categoryController from "../controllers/categoryController.js";
import customerController from "../controllers/customerController.js";
import supplierController from "../controllers/supplierController.js";
import orderController from "../controllers/orderController.js";

const router = express.Router();

router.get("/dashboard", test.index);
router.get("/test", test.index);
router.get("/", homePage);

router.use("/jamai", jamai);
router.get("/product/:id", mycontroller.showProduct);
router.get("/product", mycontroller.index);
//router.post("/product", product.create);

// ACTIVITY1 - 10 ROUTES

// 1&2 - Products
router.get("/products", productController.index);
router.post("/products", productController.create);

// 3&4 - Categories
router.get("/categories", categoryController.index);
router.post("/categories", categoryController.create);

// 5&6 - Customers
router.get("/customers", customerController.index);
router.post("/customers", customerController.create);

// 7&8 - Suppliers
router.get("/suppliers", supplierController.index);
router.post("/suppliers", supplierController.create);

// 9& 0 - Orders
router.get("/orders", orderController.index);
router.post("/orders", orderController.create);


console.log("product.create:", typeof product.create);
console.log("productController.index:", typeof productController.index);
console.log("productController.create:", typeof productController.create);
console.log("categoryController.index:", typeof categoryController.index);
console.log("categoryController.create:", typeof categoryController.create);
console.log("customerController.index:", typeof customerController.index);
console.log("customerController.create:", typeof customerController.create);
console.log("supplierController.index:", typeof supplierController.index);
console.log("supplierController.create:", typeof supplierController.create);
console.log("orderController.index:", typeof orderController.index);
console.log("orderController.create:", typeof orderController.create);

export default router;
