
  var reg=/[A-M]/g,
      string="The Great Escape",
	  match,
	  replace,
	  search;
  match=string.match(reg);
  console.log(match);
  replace=string.replace(reg,"%");
  console.log(replace);
  search=string.search(reg);
  console.log(search);
