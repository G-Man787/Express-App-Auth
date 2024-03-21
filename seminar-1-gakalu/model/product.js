const mongoose = require('mongoose');
const mySchema = mongoose.Schema({

    name: { type: String },
    price: { type: Number }
})
const sampleProductModel = mongoose.model('product', mySchema)
class ProductItemCollection {
    static async getAll() {
        const products = await sampleProductModel.find();
        return products;
    }
    static async create(obj) {
        const product = new sampleProductModel(obj);
        await product.save();
        return product;
    }
    static async getById(id){
        const product = await sampleProductModel.findOne({_id: id});
        return product;
    }
    static async update(id, obj){
        const product = await sampleProductModel.updateOne({_id: id}, obj);
        return product;
    }
    static async delete(id){
        const product = await sampleProductModel.deleteOne({_id: id});
        return product;
    }
}
module.exports = ProductItemCollection;