
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
	// 常规输出
	  console.log("我只是 console 世界的一介草民");

    // Interpolated
	// 字符替换
	  console.log("我的名字叫做 %s ", "log");
	  console.log("我的年龄是 %f ", 1.23);
//	  console.log("我的名字叫做 %o ", {1.23: 12});

    // Styled
	// 设定输出的样式
	  console.log("偷偷告诉你，我会变身 %c ~\(≧▽≦)/~巴拉拉~~", "color: #00fdff; font-size: 2em;");

    // warning!
	  console.warn("warning! 我可警告你哦~")

    // Error :|
	  console.error("error~别又来报错了！╭(╯^╰)╮");

    // Info
	  console.info("Talk is cheap. Show me the code");

    // Viewing DOM Elements
	// 打印输出 DOM 元素
	  const p = document.querySelector('p');
	  console.log(p);
	  console.dir(p);

    // Testing
	  console.assert(1 ===1, "（这句发布时删除）");
	  console.assert(1 ===0, "看看看，失策了吧");
	console.assert(p.innerHTML.match("她"), "我这儿才没有她这个人");

    // clearing
//	  console.clear();

    // Grouping together
	dogs.forEach(dog => {
		console.group();
//		console.groupCollapsed(); // 收起列表
		console.log(`${dog.name}`);
		console.log(`${dog.age}`);
		console.log(`${dog.name} 有 ${dog.age} 岁了`);
		console.groupEnd();
	});

	//
	  console.table(dogs);
	  console.table(dogs, ["age"]);

    // counting
	  console.count("（读来过反）羊只");
	  console.count("（读来过反）羊只");
	  console.count("（读来过反）鱼条");
	  console.count("（读来过反）羊只");
	  console.count("（读来过反）羊只");
	  console.count("（读来过反）鱼条");
	  console.count("（读来过反）鱼条");
	  console.count("（读来过反）羊只");

    // timing
	  console.time('fetch my data');
	  fetch("https://api.github.com/users/soyaine")
		  .then(data => data.json())
		  .then(data => {
		  console.timeEnd('fetch my data');
		  console.log(data);
	  });
//	  console.timeEnd('fetch my data');

  