      //the directory name, the filename extension string and a callback function
     var fs = require('fs');  
     var path = require('path'); 
     var list = [];
        
     module.exports = function(dirName, ext, callback) {

      fs.readdir(dirName, function (err, list) {
          if (err) {
            return callback(err);
          }  
           
          list = list.filter(function(file) {
            return path.extname(file) === '.' + ext
          })
         
          callback(null, list); 
         });
  }
