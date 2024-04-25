// Import UserService
const userService = require("../service/userService");

class UserController {
//========== Dang ki tai khoan ==============
//POST: /api/user/register
  async registerUser(req, res) {
    try {
      const userData = req.body;
      console.log("Info:", userData);
      const newUser = await userService.Register(userData);
      res.status(201).json({ message: `Đăng kí thành công`, data: newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


//POST: /api/user/login
async loginUser(req, res) {
  try {
    const dataClient = req.body;
    console.log("req info: " + dataClient);
    const isUser = await userService.Login(dataClient);
    res.status(201).json({ message: `Đăng nhập thành công`, data: isUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
}



module.exports = new UserController();
