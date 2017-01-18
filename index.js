var fetch=require('node-fetch'),
    _=require('lodash');

var _config={
    keyfrom:'glimis1231231121',
    key:936554734
}

module.exports=function(words,config){
    var cfg=_.extend({},_config,config);
    //整合参数
    var ws=[];
    if(_.isString(words)){
        ws=[words]
    }else if(_.isArray(words)){
        ws=_.map(words,function(k,v){
            return k;
        })
    }else if(_.isObject(words)){
        ws=_.map(words,function(k,v){
            return v;
        }) 
    }

    return new Promise(function(resolve, reject){
              var rs={};
              var callback=_.after(ws.length,function(){
                resolve(rs)
              })
              
              _.each(ws,function(query){
                var url=format.call("http://fanyi.youdao.com/openapi.do?keyfrom={keyfrom}&key={key}&type=data&doctype=json&version=1.1&q={q}",
                    _.extend(cfg,{
                    q:query        
                }))
                
                url=encodeURI(url);
                         

                fetch(url,{
                    method: 'GET'
                })
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(data){
                        rs[query]=data;
                        callback()
                    })
                    .catch(function(data){
                        rs[query]={};
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
