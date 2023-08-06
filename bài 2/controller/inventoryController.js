const Inventory = require("../model/Inventory");

const inventoryController = {
  //2. lấy tất cả các sản phầm trong kho
  getAllInventory: async (req, res) => {
    try {
      const list = await Inventory.find();
      res.status(200).send(list);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  //3. Cập nhật API để chấp nhận truy vấn chỉ nhận các sản phẩm có số lượng thấp (dưới 100)
  productQuery: async (req, res) => {
    try {
      const list = await Inventory.find({ instock: { $lt: 100 } });
      res.status(200).send(list);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = inventoryController;
