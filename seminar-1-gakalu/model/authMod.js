const mongoose = require('mongoose');
const mySchema = mongoose.Schema({

    username: { type: String },
    password: { type: String }
})
const users = mongoose.model('users', mySchema)
    class userCollection {
        static async getAll() {
            const products = await users.find();
            return products;
        }
        static async create(username,password,role) {
            const user = new users({username, password, role});
            await user.save();
            return user;
        }
        static async getByName(username){
            const user = await users.findOne({username});
            return user;
        }
        static async update(id){
            const user = await users.updateOne({_id: id},{username, password, role});
            return user;
        }
        static async delete(id){
            const user = await users.deleteOne({_id: id});
            return user;
        }
    }
    module.exports = userCollection;