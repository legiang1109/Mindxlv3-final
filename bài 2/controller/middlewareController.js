const jwt = require("jsonwebtoken");

const middlewareController = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, "access_token", (err, user) => {
        if (err) {
          res.status(403).send("token is not valid");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).send("you are not authenticated");
    }
  },
};
module.exports = middlewareController;
