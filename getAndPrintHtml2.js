var https = require('https');

function getAndPrintHTML (options) {

  var chunkData = '';
  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    response.on('data',function(data){
        chunkData += data;
        console.log(chunkData);
    });

    response.on('end', function(){
      console.log('Response stream complete');
    });
  });
};

var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};
getAndPrintHTML(requestOptions);
