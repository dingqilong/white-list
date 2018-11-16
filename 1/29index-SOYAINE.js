
    // ## Array Cardio Day 2
	// 数组基本操作指南二

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19? 是否有人超过 19 岁？
	const isAdult = people.some( person => {
		const currentYear = (new Date()).getFullYear();
		return currentYear - person.year >= 19;
	});
	console.log({isAdult});
	  
    // Array.prototype.every() // is everyone 19? 是否所有人都是成年人？
	const allAdult = people.every( person => new Date().getFullYear() - person.year >= 19);
	console.log({allAdult});
	  
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
	// 找到 ID 号为 823423 的评论
	const comment = comments.find(comment => comment.id == 823423);
	console.log(comment);
	  
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
	// 删除 ID 号为 823423 的评论
	const index = comments.findIndex(comment => comment.id == 823423);
	  
	// 删除方法一，splice()
	// comments.splice(index, 1);
	console.table(comments);
	// 删除方法二，slice 拼接
	const newComments = [
		...comments.slice(0, index),
		...comments.slice(index + 1)
	];
	console.table(newComments);
  