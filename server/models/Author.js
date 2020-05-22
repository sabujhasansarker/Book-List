const { Schema, model } = require("mongoose");

const authorScheam = new Schema({
  name: String,
  age: Boolean,
});

module.exports = model("Autor", authorScheam);
