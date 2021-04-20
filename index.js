const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const request = require("request");
  const fs = require("fs");
  console.log(__dirname, "__dirname");
  var options = {
    url:
      "https://api.blackhawknetwork.com/productCatalogManagement/v1/productCatalogs",
    headers: {
      "content-type": "application/json",
    },
    agentOptions: {
      pfx: fs.readFileSync(
        __dirname + "/Moocho-API-CertificationService-GW.p12"
      ),
      passphrase: "",
    },
  };
  console.log(options, "options");
  request.get(options, (error, response, body) => {
    console.log(error, "error");
    console.log(response, "response");
    console.log(body, "body");
  });
  console.log("end");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
