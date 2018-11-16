
// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    const endpoint = 'https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json';
	
 	
    const  poetrys = [];
    fetch(endpoint)
		.then(blob => blob.json())
		.then(data => poetrys.push(...data));
 
	function findMatches( wordToMatch, poetrys) {
		return poetrys.filter(poet => {
			// 正则找出匹配的诗句
			const regex = new RegExp(wordToMatch, 'gi');
			const author = poet.detail_author.join('');
//			console.log(author);
			return poet.detail_text.match(regex) || poet.title.match(regex) || author.match(regex);
		});
	}

	function displayMatches() {
		const matches = findMatches(this.value, poetrys);
		const regex = new RegExp(this.value, 'gi');
		const html = matches.map( poet => {
			// 替换高亮的标签
			const text = poet.detail_text.replace(regex, `<span class="hl">${ this.value }</span>`);
			const title = poet.title.replace(regex, `<span class="hl">${ this.value }</span>`)
			// 构造 HTML 值
			return `
				<li>
					<span class="poet">${ text }</span>
					<span class="title">${ title } - ${ poet.detail_author[0] }</span>
				</li>
			`;
		}).join('');
//		console.log(html);
		suggestions.innerHTML = html;
	}
	
	const search = document.querySelector('.search');
	const suggestions = document.querySelector('.suggestions');
	
	search.addEventListener('change', displayMatches);
	search.addEventListener('keyup', displayMatches);

//	console.log(poetrys);
 