const mongoose = require('mongoose');
require('dotenv').config()
const banco = process.env.MONGO_URL

mongoose.set('strictQuery', true);
mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true })


module.exports = mongoose;