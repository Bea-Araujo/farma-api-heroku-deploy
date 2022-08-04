const Customer = require("../models/CustomerModel");

module.exports = {
    async getAllCustomer(request, response) {
        try {
            const customers = await Customer.findAll();
            response.status(200).json(customers);
        } catch (error) {
            response.status(400).send(error);
        }
    },
    
    async getCustomer(request, response) {
        try {
            const id = request.params.id
            const  Customer = await Customer.findOne({where:{id}});

            if(!Customer){
                return response.status(400).json("Customer not found!")
             }
    
            response.status(200).json(Customer);
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async createCustomer(request, response) {
        try {
            await Customer.create(request.body);
            response.status(200).json("Customer successfully inserted");
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async updateCustomer(request, response) {
        try {
         const {name, cnpj, type, phone, address, email} = request.body;
         const id = request.params.id;

         const  Customer = await Customer.findOne({where:{id}});

         if(!Customer){
            return response.status(400).json("Supplier not found!")
         }

         Customer.name = name;
         Customer.cnpj = cnpj;
         Customer.type = type;
         Customer.phone = phone;
         Customer.address = address;
         Customer.email = email;

         await Customer.save();
         response.status(201).json("Customer Updated")
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async deleteCustomer(request, response) {
        try {
            const id = request.params.id;
            const  Customer = await Customer.destroy({where:{id}});

            if(!Customer){
                return response.status(400).json("Customer not found!")
             }

            response.status(200).json("Customer Removed! ");
        } catch (error) {
            response.status(400).send(error);
        }
    },


}
