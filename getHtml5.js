var getHTML = require('./https-functions.js')

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};

getHTML(requestOptions, printHTML);
