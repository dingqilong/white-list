
var browser=(function(){var s=window.navigator.userAgent.toLowerCase();
console.log(s);
var match=/(webkit)[\/]([\w.]+)/.exec(s)||
           /(opera)(?:.*version)?[\/]([\w.]+)/.exec(s)||
		   /(mise)([\w.]+)/.exec(s)||
           !/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s)||[];
		   return {name:match[1] || "",version:match[2] || "0"};
})()
console.log(browser);
