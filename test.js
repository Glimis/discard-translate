var translate=require('./index');
var fs=require('fs');
translate(["投标"])
  .then(function(data){    
    console.log(data)
    fs.writeFile('i18n.json',JSON.stringify(data,0,4))
  })
