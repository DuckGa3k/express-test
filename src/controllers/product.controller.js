const UserModel = require('../models/product.model');

const getProducts = async (req, res) => {
    try{
        const products = await UserModel.getProducts();
        res.status(200).send({status:"success", data: products});
    }catch(error){
        res.status(500).send({status:"false", message:"Có lỗi ở phía máy chủ"});
    }
}

const getProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await UserModel.getProduct(id);
        res.status(200).send({status:"success", data: product});
    }catch(error){
        console.log(error.message);
        res.status(500).send({status:"false", message:"Có lỗi ở phía máy chủ"});
    }
}

module.exports = {
    getProducts,
    getProduct
}