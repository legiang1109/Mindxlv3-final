const User = require("../model/User");
const jwt = require("jsonwebtoken");

const usersController = {
  //tạo access token
  generateAccessToken: (user) => {
    return jwt.sign({ id: user.id, admin: user.isAdmin }, "access_token", {
      expiresIn: "10h",
    });
  },
  //   tạo refresh token
  generateRefreshToken: (user) => {
    return jwt.sign({ id: user.id, admin: user.isAdmin }, "refresh_token", {
      expiresIn: "365d",
    });
  },

  login : async (req, res) => {
    console.log('1',req.body.username);
    const { username, password } = req.body;
    console.log(username, password);
    try {
      const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
      });
      console.log(user);
      if (!user) {
        return res.status(404).send("sai mật khẩu hoặc tài khoản");
      }
      //tạo accessToken đi kèm với tài khoản(không gửi kèm mật khẩu)
      const accessToken = usersController.generateAccessToken(user);
      const { password, ...other } = user._doc;
      res.status(200).send({ ...other, accessToken });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
module.exports = usersController;
