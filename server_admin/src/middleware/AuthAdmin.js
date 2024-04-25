const jwt = require("jsonwebtoken");
require("dotenv").config();
class AuthAdmin {
  verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Token không được cung cấp" });
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Loi xac thuc" });
      }
      req.decoded = decoded;
      next();
    });
  };

  verifyAuthAdmin = async (req, res, next) => {
    await this.verifyToken(req, res, () => {
      const { user } = req.decoded;
      console.log(user.role_id);
      if (user.role_id == process.env.ID_ADMIN) {
        next();
      } else {
        res.status(403).json("Mày đéo có quyền chỉnh sửa");
      }
    });
  };
}
module.exports = new AuthAdmin();
