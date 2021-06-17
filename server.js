const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Lyft, my name is Raphael Jason Zamora.");
});

app.post("/test", (req, res) => {
  function cutString(str) {
    let retVal = "";
    if (str.length < 3) {
      retVal = "String is less than 3 characters";
    } else {
      for (let i = 2; i < str.length; i += 3) {
        retVal += str[i];
      }
    }

    let obj = {
      return_string: retVal,
    };

    return obj;
  }
  res.json(cutString(req.body.string_to_cut));
});

app.listen(3000, () => {
  console.log("Server started...");
});
