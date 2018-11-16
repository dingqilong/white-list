
let loaded = 0;

let result = {};

let klump = {
	highcharts: {},
	highstock: {},
	highmaps: {}
};



const onload = () => {
	['highcharts', 'highstock', 'highmaps'].forEach((product) => {
		result[product].forEach((item) => {
			klump[product][item.fullname] = item;
		});
	});

	let $table = $('table#table');

	Object.keys(klump.highcharts).forEach((key) => {

		let html = '';

		//['defaults', 'description', 'demo', 'seeAlso'].forEach((prop) => {
		['description'].forEach((prop) => {
			let highchartsDesc = klump.highcharts[key][prop];
			let highstockDesc = klump.highstock[key] && klump.highstock[key][prop];
			let highmapsDesc = klump.highmaps[key] && klump.highmaps[key][prop];

			if (
				highchartsDesc && (
					(highstockDesc && highstockDesc !== highchartsDesc) ||
					(highmapsDesc && highmapsDesc !== highchartsDesc)
				)
			) {

				hasDifferences = true;

				highchartsDesc = highchartsDesc.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
				highstockDesc = highstockDesc ? highstockDesc.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
				highmapsDesc = highmapsDesc ? highmapsDesc.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';

				if (highstockDesc) {
					highstockDesc = diffString(highchartsDesc, highstockDesc)
						.replace(/&amp;lt;/g, '&lt;')
						.replace(/&amp;gt;/g, '&gt;');
				}
				if (highmapsDesc) {
					highmapsDesc = diffString(highchartsDesc, highmapsDesc)
						.replace(/&amp;lt;/g, '&lt;')
						.replace(/&amp;gt;/g, '&gt;');
				}

				html += `
					<tr>
						<td><b>${prop}</b></td>
						<td>${highchartsDesc}</td>
						<td>${highstockDesc}</td>
						<td>${highmapsDesc}</td>
					</tr>
				`;
			}
		});

		if (html) {

			$table.append(`
				<tr>
					<th colspan="4">${key}</th>
				</tr>
			` + html);
		}
	});
}



$.getJSON('highcharts.cache.json', (data) => {
	result.highcharts = data;
	loaded++;
	if (loaded === 3) {
		onload();
	}
})
$.getJSON('highstock.cache.json', (data) => {
	result.highstock = data;
	loaded++;
	if (loaded === 3) {
		onload();
	}
})
$.getJSON('highmaps.cache.json', (data) => {
	result.highmaps = data;	
	loaded++;
	if (loaded === 3) {
		onload();
	}
})
