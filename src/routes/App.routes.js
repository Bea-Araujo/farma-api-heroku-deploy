const express = require("express");
const ProductController = require("../controller/ProductController");
const SupplierController = require("../controller/SupplierController")
const CategoryController = require("../controller/CategoryController");
const CustomerController = require("../controller/CustomerController");
// const PharmacistController = require("../controller/PharmacistController");
const PharmacistCon = require('../controller/PharmacistCon');
const router = express.Router();

// Routes for the Product
router.route("/product")
    .get(ProductController.allProduct)
    .post(ProductController.createProduct);

router.route("/product/:id")
    .get(ProductController.oneProduct)
    .put(ProductController.UpdateProduct)
    .delete(ProductController.deleteProduct)

// Routes the of Category
router.route("/category")
    .get(CategoryController.allCategory)
    .post(CategoryController.createCategory);

router.route("/category/:id")
    .get(CategoryController.oneCategory)
    .put(CategoryController.UpdateCategory)
    .delete(CategoryController.deleteCategory)

//Routes for the Supplier
router.route("/supplier")
    .post(SupplierController.createSupplier)
    .get(SupplierController.getAllSuppliers);

router.route("/supplier/:id")
    .get(SupplierController.getSupplier)
    .put(SupplierController.updateSupplier)
    .delete(SupplierController.deleteSupplier);

// Routes of Customer
router.route("/customer")
    .post(CustomerController.createCustomer)
    .get(CustomerController.getAllCustomer);

router.route("/customer/:id")
    .get(CustomerController.getCustomer)
    .put(CustomerController.updateCustomer)
    .delete(CustomerController.deleteCustomer);


// Routes of Pharmacist
router.route("/pharmacist")
    .get(PharmacistCon.allPharmacist)
    .post(PharmacistCon.createPharmacist);

router.route("/pharmacist/:id")
    .get(PharmacistCon.onePharmacist)
    .put(PharmacistCon.updatePharmacist)
    .delete(PharmacistCon.deletePharmacist);


module.exports = router;
