const fs = require("fs");
const https = require("https");

const key = fs.readFileSync(`${process.cwd()}/files/server/server-key.pem`);
const cert = fs.readFileSync(`${process.cwd()}/files/server/server-cert.pem`);
const ca = [fs.readFileSync(`${process.cwd()}/files/ca/ca.pem`)];

const options = {
  key,
  cert,
  ca,
  // Requesting the client to provide a certificate, to authenticate.
  requestCert: true,
  // It this set as `true`, server will not accept any unauthenticated traffic
  // Based on the use case this will be route specific.
  rejectUnauthorized: true
};

https
  .createServer(options, function (req, res) {
    console.log(`${new Date()} ${req.socket.remoteAddress} ${req.method} ${req.url}`);
    res.writeHead(200);
    res.end("Success!");
  }).listen(3002);