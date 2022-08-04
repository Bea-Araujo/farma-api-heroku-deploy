const Supplier = require("../models/SupplierModel");

module.exports = {
    async getAllSuppliers(request, response) {
        try {
            const suppliers = await Supplier.findAll();
            response.status(200).json(suppliers);
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async getSupplier(request, response) {
        try {
            const id = request.params.id
            const  supplier = await Supplier.findOne({where:{id}});

            if(!supplier){
                return response.status(400).json("Supplier not found!")
             }
    
            response.status(200).json(supplier);
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async createSupplier(request, response) {
        try {
            await Supplier.create(request.body);
            response.status(200).json("Supplier successfully inserted");
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async updateSupplier(request, response) {
        try {
         const {name, cnpj, type, phone, address, email} = request.body;
         const id = request.params.id;

         const  supplier = await Supplier.findOne({where:{id}});

         if(!supplier){
            return response.status(400).json("Supplier not found!")
         }

         supplier.name = name;
         supplier.cnpj = cnpj;
         supplier.type = type;
         supplier.phone = phone;
         supplier.address = address;
         supplier.email = email;

         await supplier.save();
         response.status(201).json("Supplier Updated")
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async deleteSupplier(request, response) {
        try {
            const id = request.params.id;
            const  supplier = await Supplier.destroy({where:{id}});

            if(!supplier){
                return response.status(400).json("Supplier not found!")
             }

            response.status(200).json("Supplier Removed! ");
        } catch (error) {
            response.status(400).send(error);
        }
    },

}