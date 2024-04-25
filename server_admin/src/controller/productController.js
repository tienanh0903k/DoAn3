const productService = require("../service/productService");
const HttpError = require("../error/errorModels");

class productController {
  async getProduct(req, res) {
    try {
      let data = req.body;
      const list = await productService.getProduct(data);
      res.status(201).json(list);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const requestData = req;
      // console.log(requestData);
      // const file = req.files;
      // console.log(req.body, 21)
      // console.log(req.files, 21)
      //console.log("list file:", file);
      const result = await productService.createProducts(requestData);
      res.status(200).json({
        success: true,
        message: "Thêm thành công sản phẩm",
      });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({
        success: false,
        message: "Failed to create product",
        error: error.message,
      });
    }
  }

  async getInfoHome(req, res, next) {
    try {
      const list = await productService.getTopProduct();
      //onsole.log(list); //undefined
      res.status(201).json(list);
    } catch (error) {
      console.log("Loi:", error);
      return next(new HttpError(error));
    }
  }

  async getProductById(req, res, next) {
    try {
      let id = req.params.id;
      const product = await productService.getProductById(id);
      if (!product) {
        return res.status(404).json({
          message: "Không tìm thấy sản phẩm",
        });
      }
      res.status(201).json(product);
    } catch (error) {
      return next(new HttpError(error));
    }
  }
}
module.exports = new productController();
