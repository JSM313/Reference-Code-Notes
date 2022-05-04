app.get("/", (req, res, next) => {
  console.log("Here");
  //   res.sendStatus(500);
  //   res.send("Hi");

  //  * We can also chain together statuses along with other stuff...
  //   res.status(500).json({ message: "Error" });

  //* to download the file...
  //   res.download("server.js");

  // * to render a file...
  res.render("index", { text: "World" });
});
