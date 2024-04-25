const { generateSalt, hashPassword, comparePassword,  generateAccessToken} = require("../utils/index");
const db = require("../models/index");
//const User = require("../models/user");

class UserService {
  // ------------  Dang ki tai khoan --------------------------------
  async Register(userInfo) {
    try {
      //console.log(userInfo);
      const {
        fullname,   
        email,
        phone_number,
        address,
        password,
        role_id,
        status,
      } = userInfo;
      const isEmailUnique = await this.checkUniqueEmail(email);
      if (!isEmailUnique) {
        throw new Error("Email đã tồn tại");
      }

      const salt = await generateSalt();
      const hashedPassword = await hashPassword(password, salt);
      const newUser = await db.User.create({
        ...userInfo,
        password: hashedPassword,
      });

      return newUser;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }
  async Login(userInfo) {
    try {
      const { email, password } = userInfo;
      if (!password || !email) {
        console.log(email, password);
         throw new Error("Khong bo trong");
      }
      const user = await db.User.findOne({ where: { email } });
      if (!user) {
        throw new Error("Email khong ton tai");
      }

      const isPasswordCorrect = await comparePassword(password, user.password);
      if (!isPasswordCorrect) {
        throw new Error("Mật khẩu khong chinh xac");
      }
      const token = generateAccessToken({user});
      return {
        token,
        user
      };

    } catch (error) {
      throw error;
    }
  }

  //--------------------TOOLER------------------------------------------
  async checkUniqueEmail(email) {
    try {
      const newEmail = email.toLowerCase();
      const existEmail = await db.User.findOne({ where: { email: newEmail } });
      return !existEmail;
    } catch (error) {
      console.error("Error checking email uniqueness:", error);
      throw error;
    }
  }

  // async createUser(userData) {
  //   try {
  //     console.log(userData);
  //     const salt = await generateSalt();
  //     const hashedPassword = await hashPassword(userData.password, salt);

  //     const newUser = await db.User.create({
  //       ...userData,
  //       password: hashedPassword,
  //     });

  //     return newUser;
  //   } catch (error) {
  //     // Handle errors
  //     throw new Error("Failed to create user: " + error.message);
  //   }
  // }
}

module.exports = new UserService();
