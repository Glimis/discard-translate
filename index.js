var fetch=require('node-fetch'),
    _=require('lodash');



module.exports=function(words){
   
    return new Promise(function(resolve, reject){
              var rs={};
              var ws=_.keys(words);
              var callback=_.after(ws.length,function(){
                resolve(rs)
              })
              
              _.each(ws,function(query){
                var url=format.call("http://fanyi.youdao.com/openapi.do?keyfrom={keyfrom}&key={key}&type=data&doctype=json&version=1.1&q={q}",{
                    keyfrom:'glimis1231231121',
                    key:936554734,
                    q:query        
                })
                
                url=encodeURI(url);
                         

                fetch(url,{
                    method: 'GET',
                    headers: {
                     "Host":"fanyi.youdao.com",
                     "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
                    },
                })
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(data){
                        if(data.errorCode==0){
                            rs[query]=data.translation[0];
                        }else{
                            console.log('query',data)
                            rs[query]="";
                        }
                        
                        callback()
                    })
                    .catch(function(data){
                        console.log('error',data)
                        rs[query]='';
                        callback()
                    })
              })
    })


}

function format(args) {
    var result = this;
    if (arguments.length > 0) {    
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出

　　　　　　　　　　　　var reg= new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}
