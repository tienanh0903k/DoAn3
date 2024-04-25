const db = require("../models/index");

class CategoriesService {
  //-------------------------ADMIN---------------------------------------
  async getCateById(categoryId) {
    const list = await db.Product.findAll({
      where: {
        category_id: categoryId,
      },
      include: [
        {
          model: db.Category,
          attributes: ["name"],
        },
      ],
      nest: true,
      raw: true,
    });
    console.log(">>List: ", list);
    return list;
  }
  //------------------------- USER --------------------------------------
  async getAllCate() {
    const list = await db.Category.findAll({
      raw: true,
    });
    //console.log(">>List: ", list);
    return list;
  }
}
module.exports = new CategoriesService();
