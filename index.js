const { rejects } = require("assert");
const express = require("express");
const { resolve } = require("path");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
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
  await new Promise((resolve, rejects) => {
    request.get(options, (error, response, body) => {
      if (error) {
        rejects(error);
        console.log(error, "error");
      }
      console.log(response, "response");
      console.log(body, "body");
      resolve(response);
    });
  });
  console.log("end");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
