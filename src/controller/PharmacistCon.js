const Pharmacist = require('../models/PharmacistMod')

module.exports = {
    async allPharmacist(req, res) {
        try {
            const pharmacists = await Pharmacist.findAll();
            res.status(200).json(pharmacists);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async onePharmacist(req, res) {
        try {
            const id = req.params.id
            const pharmacist = await Pharmacist.findOne({ where: { id } });

            if (!pharmacist) {
                return res.status(400).json("Pharmacist not found!")
            }

            res.status(200).json(pharmacist);
        } catch (error) {
            res.status(400).send(error);
        }
    },


    async createPharmacist(req, res) {
        try {
            await Pharmacist.create(req.body);
            res.status(200).json("Pharmacist inserted successfully");
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async updatePharmacist(request, response) {
        try {
            const { name, cpf, crf, phone, address, birthdate, gender, salary, commission, workHours, email } = request.body;
            const id = request.params.id;

            const pharmacist = await Pharmacist.findOne({ where: { id } });

            if (!pharmacist) {
                return response.status(400).json("Pharmacist not found!")
            }

            pharmacist.id = id;
            pharmacist.name = name;
            pharmacist.cpf = cpf;
            pharmacist.crf = crf;
            pharmacist.phone = phone;
            pharmacist.address = address;
            pharmacist.birthdate = birthdate;
            pharmacist.gender = gender;
            pharmacist.salary = salary;
            pharmacist.commission = commission;
            pharmacist.workHours = workHours;
            pharmacist.email = email;

            await pharmacist.save();
            response.status(201).json("Pharmacist Updated")
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async deletePharmacist(request, response) {
        try {
            const id = request.params.id;
            const pharmacist = await Pharmacist.destroy({ where: { id } });

            if (!pharmacist) {
                return response.status(400).json("Pharmacist not found!")
            }

            response.status(200).json("Pharmacist Removed! ");
        } catch (error) {
            response.status(400).send(error);
        }
    }
}