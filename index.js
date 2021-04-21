const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();
const port = 3000;
/*
const options = {
  pfx: fs.readFileSync(__dirname + "/Moocho-API-CertificationService-GW.p12"),
  passphrase: "FF2NX0WB315NLK1RR6611PQWK4",
  agent: false,
};

https
  .createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  })
  .listen(port);

*/
app.get("/", (req, res) => {
  var options = {
    hostname: "api.blackhawknetwork.com",
    port: 8080,
    path: "/productCatalogManagement/v1/productCatalogs",
    method: "GET",
    pfx: fs.readFileSync(__dirname + "/Moocho-API-CertificationService-GW.p12"),
    passphrase: "FF2NX0WB315NLK1RR6611PQWK4",
    requestorId: "CLMMVC5PQRRYHGZCG6LX47Z6T8",
  };

  options.agent = new https.Agent(options);

  var req = https.request(options, function (res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    res.on("data", function (d) {
      process.stdout.write(d);
    });
  });
  req.end();

  req.on("error", function (e) {
    console.error(e, "ERROR");
  });
});
/*
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
      passphrase: "FF2NX0WB315NLK1RR6611PQWK4",
      securityOptions: "SSL_OP_NO_SSLv3",
    },
  };
  console.log(options, "options");
  try {
    let P = await new Promise((resolve, rejects) => {
      request.get(options, (error, response, body) => {
        if (error) {
          console.log(error, "error");
          rejects(error);
        } else {
          console.log(response, "response");
          console.log(body, "body");
          resolve(response);
        }
      });
    });
    console.log("end");
    res.send("Hello World!", P);
  } catch (e) {
    console.log("catch", e);
    res.end();
  }
});*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
