const mongoose = require("mongoose");
const inventorySchema = new mongoose.Schema(
  {
    sku: String,
    description: String,
    instock: Number,
  },
  {
    collection: "inventory",
    timestamps: true,
  }
);
module.exports = mongoose.model("inventory", inventorySchema);
