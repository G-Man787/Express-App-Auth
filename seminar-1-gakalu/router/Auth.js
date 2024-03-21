const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/authMod");
const bcrypt = require("bcryptjs");
const SECRET_KEY = "Getachew";

router.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = await User.create(username, hashedPassword, role);
  res.send(user);
});
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const user = await User.getByName(username);
    console.log(user);
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const accessToken = jwt.sign({ username, role: user.role }, SECRET_KEY);
        res.send(accessToken);
      } else {
        res.send("Wrong password");
      }
    } else {
      res.send("Either username or password wrong");
    }
  } else {
    res.send("Please input username and password");
  }
});
authorize = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token,  SECRET_KEY, (err) => {
      if (err) {
        res.status(403).send("access denied");
      } else {
        next();
      }
    });
  } else {
    res.status(401).send("Not allwod");
  }
};
router.get("", async (req, res) => {
  const usersList = await User.getAll();
  res.send(usersList);
});

router.get("/:id", async (req, res) => {
  const userOne = await User.getById(req.params.id);
  res.send(userOne);
});
router.put("/:id", async (req, res) => {
  const userUpdateOne = await User.update(req.params.id, req.body);
  res.send(userUpdateOne);
});

router.delete("/:id", async (req, res) => {
  const userDeleteOne = await User.delete(req.params.id);
  res.send(userDeleteOne);
});
module.exports = router;
