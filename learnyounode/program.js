////////////////////////////////////////////////////////////////
// HTTP JSON API SERVER 

 var http = require('http');
 var url = require('url'); 
 var map = require('through2-map'); 
 var output = {}; 



// var server = http.createServer(function (request, response) {
//      if (request.method == 'GET') {
//           var parsedUrl = url.parse(request.url, true);
//           if (parsedUrl.pathname == '/api/parsetime') {
//                var date = new Date(parsedUrl.query.iso);
//                console.log(date);
//                output = {"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()}
//           } 
//           if (parsedUrl.pathname == '/api/unixtime') {
//                var date = new Date(parsedUrl.query.iso);
//                output = { "unixtime": date.getTime() }
//           }
//      }
//      response.writeHead(200, { 'Content-Type': 'application/json' }) 
//      response.write(JSON.stringify(output));
//      response.end();
// })
// server.listen(process.argv[2]);
//////////////////////////////////////////////////////////////
// HTTP UPPERCASERER
// var http = require('http');
// var map = require('through2-map'); 
// var server = http.createServer(function (request, response) {
//      if (request.method == 'POST') {
//           request.pipe(map(function (chunk) {  
//           return chunk.toString().toUpperCase()  
//           })).pipe(response)
//      }
// })

// server.listen(process.argv[2]);


/////////////////////////////////////////////////////////////////
//HTTP File Server
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (request, response) {
//      var requestStream = fs.createReadStream(process.argv[3])

//      requestStream.pipe(response)

// })

// server.listen(process.argv[2]);
/////////////////////////////////////////////////////////////////
//Time Server
// var net = require('net');

// var server = net.createServer(function(socket) {  

//   date = new Date();

//   formattedDate = date.getFullYear() +"-"
//   + addZero(date.getMonth() + 1) + "-"
//   + addZero(date.getDate()) + " "
//   + addZero(date.getHours()) + ":"
//   + addZero(date.getMinutes()) 
//   + "\n";

//   socket.end(formattedDate); 
// });

// server.listen(process.argv[2]);

// function addZero(dateComponent){
//   if (dateComponent < 10) {
//     return "0" + dateComponent;     
//   } else {
//     return dateComponent;
//   }
// }
////////////////////////////////////////////////////////////////
//Juggling Async
// var http = require('http');
// var urls = process.argv.slice(2);
// var bl = require('bl');
// var count = 0;
// var completeResponse = [];
 

// function getData(index) {
    
//     http.get(urls[index], function (response){
  
//     response.pipe(bl(function (err, data) { 
//       if (err) 
//         return console.error(err)
//         completeResponse[index] = data.toString();
//         count++;
//          if (count == 3) {
//           console.log(completeResponse[0]);
//           console.log(completeResponse[1]);
//           console.log(completeResponse[2]);
//         }
//     }));
//   }); 
// }

// for (var i = 0; i < 3; i++)
//   getData(i)

////////////////////////////////////////////////////////////////
//http collect
// var http = require('http');
// var bl = require('bl');

// var url = process.argv[2];

// var request = http.get(url, function (response){
//   // response.setEncoding('utf8')
//   response.pipe(bl(function (err, data) { 
//     if (err) 
//       return console.error(err)
//   console.log(data.toString().length);
//   console.log(data.toString()); 
//   }));
// });    
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
//http client
// var http = require('http');

// var url = process.argv[2];

// var request = http.get(url, function (response){
//   response.setEncoding('utf8')
//   response.on('data', console.log);
// })    
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//Make it Modular
//      var mymodule = require('./mymodule');   
//      var folder = process.argv[2]  
//      var ext = process.argv[3]  
         
//      var callback = function (err, list) {
//       if (err) {
//         return console.error(err);
//       }
//        list.forEach(function(file) {
//           console.log(file)
//        });
// }
//      mymodule(folder, ext, callback);

///////////////////////////////////////////////////////////////
// Filtered LS
     // var fs = require('fs')  
     // var path = require('path')  
       
     // var folder = process.argv[2]  
     // var ext = '.' + process.argv[3]  
       
     // fs.readdir(folder, function (err, files) {  
     //   if (err) return console.error(err)  
     //   files.forEach(function(file) {  
     //       if (path.extname(file) === ext) {  
     //           console.log(file)  
     //       }  
     //   })  
     // })
///////////////////////////////////////////////////////////////
// My first async I/O!
 // var fs = require('fs')  
 //     var file = process.argv[2]  
       
 //     fs.readFile(file, function (err, contents) {  
 //       // fs.readFile(file, 'utf8', callback) can also be used  
 //       var lines = contents.toString().split('\n').length - 1  
 //       console.log(lines)  
 //     })  
///////////////////////////////////////////////////////////////
// My first I/O
 // var fs = require('fs')  
       
 //     var contents = fs.readFileSync(process.argv[2])  
 //     var lines = contents.toString().split('\n').length - 1  
 //     console.log(lines)
 //////////////////////////////////////////////////////////////