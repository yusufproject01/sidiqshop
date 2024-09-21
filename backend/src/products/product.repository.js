// import db /ORM
const prisma = require('../db')

// Find All Products
const findProducts = async () => {
    const products = await prisma.product.findMany()
    return products
}

// Find Product By Id
const findProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })
    return product
}




// export
module.exports = {
    findProducts
}