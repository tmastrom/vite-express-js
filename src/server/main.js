const express = require("express");
const ViteExpress = require("vite-express");

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.get("/api/contacts", (req, res) => {
  res.send({
    contacts: [
      {id: 0, name: "Tom", age: 26},
      {id: 1, name: "Sam", age: 35},
      {id: 2, name: "Chris", age: 100}
    ]
  });
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
