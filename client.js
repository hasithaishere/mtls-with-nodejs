const fs = require('fs');
const https = require('https');

const message = { msg: 'Hi Server!' };

const req = https.request( {
    host: 'server.mtls-tester.com',
    port: 3002,
    secureProtocol: 'TLSv1_2_method',
    key: fs.readFileSync(`${process.cwd()}/files/client/client-key.pem`),
    cert: fs.readFileSync(`${process.cwd()}/files/client/client-cert.pem`),
    ca: [
      fs.readFileSync(`${process.cwd()}/files/ca/ca.pem`)
    ],
    path: '/',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(JSON.stringify(message))
    }
  }, (response) => {
    console.log('Response statusCode: ', response.statusCode);
    console.log('Response headers: ', response.headers);
    console.log(`Server Host Name: ${ response.socket.getPeerCertificate().subject.CN }`);

    if (response.statusCode !== 200) {
      console.log(`Wrong status code`);
      return;
    }

    let rawData = '';
    response.on('data', function (data) {
      rawData += data;
    });

    response.on('end', function () {
      if (rawData.length > 0) {
        console.log(`Received message: ${rawData}`);
      }
      console.log(`TLS Connection closed!`);
      req.end();
      return;
    });
  }
);

req.on('socket', (socket) => {
  socket.on('secureConnect', () => {
    if (socket.authorized === false) {
      console.log(`SOCKET AUTH FAILED ${socket.authorizationError}`);
    }
    console.log('TLS Connection established successfully!');
  });
  socket.setTimeout(10000);
  socket.on('timeout', () => {
    console.log('TLS Socket Timeout!');
    req.end();
    return;
  });
});

req.on('error', (err) => {
  console.log(`TLS Socket ERROR (${err})`);
  req.end();
  return;
});

req.write(JSON.stringify(message));