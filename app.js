const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [{ name: "Tony", email: "tony@mail.com" }];

app.get("/", (_, res, next) => {
  res.send("Your Express App");
});

app.get("/users", (_, res, next) => {
  res.json(users);
});

app.get("/user/:name", (req, res) => {
  const { name } = req.params;
  const foundUser = users.filter((user) => user.name === name)[0];
  res.json({ foundUser });
});

app.post("/adduser", (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    users.push({ name, email });
    res.json(users);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
