const mongoose = require('mongoose')
const db = mongoose.connect(process.env.MONGO_DB_CONNECT, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

module.exports = db
