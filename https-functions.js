
var https = require('https');
module.exports = function getHTML (options, callBack) {

  var chunkData = '';
  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on('data',function(data){
        chunkData += data;
        callBack(chunkData);
    });

    response.on('end', function(){
      console.log('Response stream complete');
    });
  });
};
