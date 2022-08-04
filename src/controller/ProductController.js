const Product = require("../models/ProductModel");

module.exports = {
    async allProduct(request, response) {
        try {
            const products = await Product.findAll();
            response.status(200).json(products);
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async oneProduct(request, response) {
        try {
            const id = request.params.id
            const  product = await Product.findOne({where:{id}});

            if(!product){
                return response.status(400).json("Product not found!")
             }
    
            response.status(200).json(product);
        } catch (error) {
            response.status(400).send(error);
        }
    },
    

    async createProduct(request, response) {
        try {
            await Product.create(request.body);
            response.status(200).json("Insert Product with Successfully");
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async UpdateProduct(request, response) {
        try {
         const {name,brand ,quantity ,value ,blackBand ,redBand,yellowBand } = request.body;
         const id = request.params.id;

         const  product = await Product.findOne({where:{id}});

         if(!product){
            return response.status(400).json("Product not found!")
         }

         product.name = name;
         product.brand = brand;
         product.quantity = quantity;
         product.value = value;
         product.blackBand = blackBand;
         product.redBand = redBand;
         product.yellowBand = yellowBand;

         await product.save();
         response.status(201).json("Product Update")
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async deleteProduct(request, response) {
        try {
            const id = request.params.id;
            const  product = await Product.destroy({where:{id}});

            if(!product){
                return response.status(400).json("Product not found!")
             }

            response.status(200).json("Product Removed! ");
        } catch (error) {
            response.status(400).send(error);
        }
    },

    
}