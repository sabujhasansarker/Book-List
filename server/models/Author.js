const { Schema, model } = require("mongoose");

const authorScheam = new Schema({
  name: String,
  age: Number,
});

module.exports = model("Autor", authorScheam);
