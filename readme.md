## 脱坑
有道翻译,已开始收费

## 批量翻译
国际化工程,使用有道批量翻译


## test
```javascript
translate(["投标"],{
  keyfrom:'',
  key:''
})
  .then(function(data){    
    console.log(data)
    fs.writeFile('i18n.json',JSON.stringify(data,0,4))
  })
```

```javascript
translate("投标")
  .then(function(data){    
    console.log(data)
    fs.writeFile('i18n.json',JSON.stringify(data,0,4))
  })
```

```javascript
translate({"投标"})
  .then(function(data){    
    console.log(data)
    fs.writeFile('i18n.json',JSON.stringify(data,0,4))
  })
```

返回有道翻译后的对象
```javascript
{
    "投标": {
        "translation": [
            "The tender"
        ],
        "basic": {
            "phonetic": "tóu biāo",
            "explains": [
                "[贸易] bid",
                "[贸易] tender"
            ]
        },
        "query": "投标",
        "errorCode": 0,
        "web": [
            {
                "value": [
                    "tender",
                    "bid",
                    "submission of tender"
                ],
                "key": "投标"
            },
            {
                "value": [
                    "open tender",
                    "public tender",
                    "public bidding"
                ],
                "key": "公开投标"
            },
            {
                "value": [
                    "Form of Tender",
                    "Tender",
                    "book of tender"
                ],
                "key": "投标书"
            }
        ]
    }
}
```
