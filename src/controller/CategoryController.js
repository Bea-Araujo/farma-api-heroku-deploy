const Category = require("../models/CategoryModel");

module.exports = {

    async createCategory(request, response) {
        try {
            await Category.create(request.body);
            response.status(200).json("Insert Category with Successfully");
        } catch (error) {
            response.status(400).send(error);
        }
    },
    
    async allCategory(request, response) {
        try {
            const categories = await Category.findAll();
            response.status(200).json(categories);
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async UpdateCategory(request, response) {
        try {
         const {name,type } = request.body;
         const id = request.params.id;

         const  category = await Category.findOne({where:{id}});

         if(!category){
            return response.status(400).json("Category not found!")
         }

         category.name = name;
         category.type = type;

         await category.save();
         response.status(201).json("Category Update")
        } catch (error) {
            response.status(400).send(error);
        }
},

async oneCategory(request, response) {
    try {
        const id = request.params.id
        const  category = await Category.findOne({where:{id}});

        if(!category){
            return response.status(400).json("Category not found!")
         }

        response.status(200).json(category);
    } catch (error) {
        response.status(400).send(error);
    }
},
async deleteCategory(request, response) {
    try {
        const id = request.params.id;
        const  category = await Category.destroy({where:{id}});

        if(!category){
            return response.status(400).json("Category not found!")
         }

        response.status(200).json("CategoryRemoved! ");
    } catch (error) {
        response.status(400).send(error);
    }
}
}