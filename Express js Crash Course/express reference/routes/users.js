const express = require("express");
const router = express.Router();
router.use(logger);

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "test" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push(req.body.firstName);
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

// router.get("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Get user with id ${req.params.id}`);
// });

// common method for linking get, put and delete at the same time...

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => res.send(`Update user with id ${req.params.id}`))
  .delete((req, res) => res.send(`Delete user with id ${req.params.id}`));

const users = [{ name: "Kyle" }, { name: "John" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.url);
  next();
}

module.exports = router;
