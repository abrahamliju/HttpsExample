var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
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

getAndPrintHTML();
