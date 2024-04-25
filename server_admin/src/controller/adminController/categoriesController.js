// Import UserService
const cateService = require("../../service/cateService");
const HttpError = require("../../error/errorModels")

class categoryController {
  async getAll(req, res, next) {
    try {
      const listDM = await cateService.getAllCate();
      //console.log(newUser);
      res.status(201).json(listDM);
    } catch (error) {
       return next(new HttpError(error));
    }
  }
}

module.exports = new categoryController();
