const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: { type: ObjectId },
    username: { type: String, requiredPaths: true },
    password: { type: String, requiredPaths: true },
    name: { type: String, requiredPaths: true },
    numberplay: { type: Number, requiredPaths: true, default: 2 },
});

module.exports = mongoose.model('user', userSchema);