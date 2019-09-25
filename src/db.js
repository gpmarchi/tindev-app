const mongoose = require("mongoose");

const databaseUri = process.env.DATABASE;

mongoose.connect(databaseUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
