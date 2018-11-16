
	  
    // ## Array 基础 Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
	// 筛选 16 世纪出生的人
	  const fifteen = inventors.filter(function(inventor) {
		  if (inventor.year >= 1500 && inventor.year < 1600 ) {
			  return true;
		  }
	  });
	  console.table(fifteen);
	  
	  const __fifteen = inventors.filter(inventor =>(inventor.year >= 1500 && inventor.year < 1600));
	  console.table(__fifteen);


    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
	// 展示上面发明家的姓名  
	  const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
//	 const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
	  console.log(fullNames);
	  

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
	// 把这些人从大到小进行排序
//	  const ordered = inventors.sort(function(firstName, secondName) {
//		  if(firstName.year > secondName.year) {
//			  return 1;  //	  对 sort 函数，返回值为 -1 排在前面，1 排在后面
//		  } else {
//			  return -1;
//		  }
//	  });
//	  console.table(ordered);	
	  
	  const __ordered = inventors.sort((a, b) => (a > b) ? 1 : -1);
	  console.table(__ordered);


    // Array.prototype.reduce()
    // 4. How many years did all the inventors live
	// 他们所有人一共活了多少岁
	// 下面三种写法是一样的效果
//	  var total = 0;
//	  for(var i = 0; i < inventors.length; i++) {
//		  total += inventors[i].passed - inventors[i].year;
//	  }
//	  console.log(total);
//
//	 var totalYears = inventors.reduce(function(total, inventor) {
//		  return total + inventor.passed - inventor.year;
//	  }, 0);
//	  console.log(totalYears);
	  
	  const totalYear = inventors.reduce( (total, inventor) => {
		  return total + inventor.passed - inventor.year;
	  }, 0);
	  console.log(totalYear);

    // 5. Sort the inventors by years lived、
	// 按照他们在世的岁数进行排序
	  const oldest = inventors.sort( (a, b) => {
		  const last = a.passed - a.year;
		  const next = b.passed - b.year;
		  return (next < last) ? -1 : 1;
	  });
	  console.table(oldest);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
	
    // 这个是超级酷的一个玩法，打开上面的网页。然后输入下面的语句，就可以筛选出页面中含有 'de' 这个词的所有街道的名称
	 
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));

	  
	  // 下面是我在豆瓣里筛选书名里含有 CSS 的书的代码
	  // https://book.douban.com/tag/web
//	  const links = Array.from(document.querySelectorAll('.subject-list h2 a'));
//	  const book = links
//					.map(link => link.title)
//					.filter(title => title.includes('CSS'));
	  
	  
    // 7. sort Exercise
    // Sort the people alphabetically by last name
	// 按照姓氏的字母进行排序
	  const sortName = inventors.sort( (a, b) => {
		  return (a.last > b.last) ? 1 : -1;
	  })
	  console.table(sortName);
	  
	  
    // 8. Reduce Exercise
    // Sum up the instances of each of these
	// 统计各个物品的数量
	  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
	  const reduce = data.reduce( (obj, item) => {
		  if( !obj[item]  ) {
			  obj[item] = 0;
		  }
			  obj[item]++;
		  	  return obj;
	  }, {});
	  console.log(reduce);
	  
  