const express = require("express");
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const router = express.Router();

// Get All Products
router.get('/', async (req, res) => {
    try {
        const product = await prisma.product.findMany()
        res.json(product)
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong!'
        })
    }
})

module.exports = router