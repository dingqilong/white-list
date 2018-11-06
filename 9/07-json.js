
	// 1. 遍历方法for...in...  (一般数组和dom对象不使用本方法)
    var json = {"aaa":111,"bbb":222};  
    for(var k in json){
        console.log(k);   //属性
        console.log(json[k]); //值
    }

    // 2. 定义json字符串
    var jsonText = 	'{'+
				        '"username":"sun",'+
				        '"age":20,'+
				        '"info": { "tel": "123456", "cellphone": "98765"},'+
				        '"address":['+
				                '{"city":"beijing","postcode":"222333"},'+
				                '{"city":"newyork","postcode":"555666"}'+
				        ']'+
				    '}';
	console.log(typeof jsonText);//string	

	// 3. 定义json对象
	var jsonObj =
				    {
				        "username":"sun",
				        "age":20,
				        "info": { "tel": "123456", "cellphone": "98765"},
				        "address":[ 
				                {"city":"beijing","postcode":"222333"},
				                {"city":"newyork","postcode":"555666"}
				        ]
				    };
	console.log(typeof jsonObj);//object

    // 4. JSON反序列化：JSON string --> JSON obj
	var obj1 = JSON.parse(jsonText);
    var obj2 = eval('(' + jsonText + ')');
    console.log(typeof obj1);//object
    console.log(typeof obj2);//object

    // 5. JSON序列化：JSON obj --> JSON string
    var str = JSON.stringify(jsonObj)
    console.log(str);
    console.log(typeof str);//string 

    // 6. 读写数据
    jsonObj.address[1].postcode = 225300;//int
	console.log(jsonObj.address[1].postcode);
    
