const express = require("express");
const router = express.Router();

const users = [{ name: "Tony", email: "tony@mail.com" }];

router.get("/", (_, res, next) => {
  res.send("Your Express App");
});

router.get("/users", (_, res, next) => {
  res.json(users);
});

router.get("/user/:name", (req, res) => {
  const { name } = req.params;
  const foundUser = users.filter((user) => user.name === name)[0];
  res.json({ foundUser });
});

router.post("/adduser", (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    users.push({ name, email });
    res.json(users);
  }
});

module.exports = router;
