// Import UserService
const cateService = require("../service/cateService");
const HttpError = require("../error/errorModels")

class categoriesController {
  async getCateById(req, res, next) {
    try {
      let id = req.params.id;
      const newUser = await cateService.getCateById(id);
      res.status(201).json(newUser);
    } catch (error) {
       return next(new HttpError(error));
    }
  }
}

module.exports = new categoriesController();
