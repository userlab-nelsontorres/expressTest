const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const request = require("request");
  const fs = require("fs");

  var options = {
    url:
      "https://api.blackhawknetwork.com/productCatalogManagement/v1/productCatalogs",
    headers: {
      "content-type": "application/json",
    },
    agentOptions: {
      pfx: fs.readFileSync(
        __dirname + "/certs/Moocho-API-CertificationService-GW.p12"
      ),
      passphrase: "",
    },
  };

  request.get(options, (error, response, body) => {
    console.log(error);
    console.log(response);
    console.log(body);
  });
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
