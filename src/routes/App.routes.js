const express = require("express");
const ProductController = require("../controller/ProductController");
const SupplierController = require("../controller/SupplierController")
const CategoryController = require("../controller/CategoryController");
const CustomerController = require("../controller/CustomerController")
const PharmacistController = require("../controller/PharmacistController");
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


// Routs of Pharmacist
router.route("/pharmacist")
    .get(PharmacistController.allPharmacist)
    .post(PharmacistController.createPharmacist);

router.route("/pharmacist/:id")
    .get(PharmacistController.onePharmacist)
    .put(PharmacistController.updatePharmacist)
    .delete(PharmacistController.deletePharmacist);


module.exports = router;
