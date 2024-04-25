const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = require("./../config/config");

module.exports.generateSalt = async () => {
  return await bcrypt.genSalt();
};

module.exports.hashPassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

module.exports.comparePassword = async (password, cfPassword) => {
  return await bcrypt.compare(password, cfPassword);
};  

module.exports.generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports.generateRefreshToken = (user) => {
  return jwt.sign(user, REFRESH_TOKEN_KEY, { expiresIn: "7d" });
};

module.exports.verifyToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
};
