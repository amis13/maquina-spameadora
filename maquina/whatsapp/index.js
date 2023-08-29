require("dotenv").config();
var qs = require("querystring");
var http = require("https");
const { phoneNumbers } = require("./phoneNumbers")

var options = {
  "method": "POST",
  "hostname": "api.ultramsg.com",
  "port": null,
  "path": "/instance59450/messages/image",
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

var postData = qs.stringify({
    "token": `${process.env.TOKEN}`,
    "to": `${phoneNumbers}`,
    "image": "https://file-example.s3-accelerate.amazonaws.com/images/test.jpg",
    "caption": "Probando maquina Spameadora"
});
req.write(postData);
req.end();
