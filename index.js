const request = require("request");
const clipboardy = require('clipboardy');

request.get("https://canihazip.com/s", function(error, response, body) {
    clipboardy.writeSync(body);
    console.log(`Copied IP address to clipboard: ${body}`);
});
