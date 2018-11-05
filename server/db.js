const mongoose = require('mongoose');
// const DB_URL =process.env.DB_URL || 'mongodb://localhost:27017/pinterestNew'
const DB_URL ="mongodb://admin:shany111@ds225543.mlab.com:25543/pinterest"
// let DB_URL = 'mongodb://localhost:27017/pinterest'

mongoose.connect(DB_URL);


module.exports = mongoose;