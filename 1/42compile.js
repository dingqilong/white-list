
var source = '<ul>'
+    '<% for (var i = 0; i < list.length; i ++) { %>'
+        '<li>索引 <%= i + 1 %> ：<%= list[i] %></li>'
+    '<% } %>'
+ '</ul>';

var render = template.compile(source);
var html = render({
    list: ['摄影', '电影', '民谣', '旅行', '吉他']
});

document.getElementById('content').innerHTML = html;
