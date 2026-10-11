import Product from "../models/product.js";

const product = {
    all: async (req, res) => {
        try {
            const products = await Product.findAll();

            res.json(products);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    insert: async (req, res) => {
        try {
            const { name, description, category, price, stock } = req.body;

            const products = await Product.create({
                name,
                description,
                category,
                price,
                stock
            });

            res.json(products);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    show: async (req, res) => {
        try {
            const { id } = req.params;

            const products = await Product.findByPk(id);

            res.json(products);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    }
};

export default product;