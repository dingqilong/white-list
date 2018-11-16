


$(document).ready(function() {
  $('#metricsData').change(function()  { events = jsonpack.unpack(atob($('#metricsData').val())); updateMetrics(); });
});

var data = location.search.split('data=')[1] || location.hash.split('data=')[1],events;
if (data) {
  events = jsonpack.unpack(atob(decodeURIComponent(data)));
  updateMetrics();
}

function updateMetrics() {
  var hlsLink = document.URL.substr(0,document.URL.lastIndexOf("/")+1) + 'index.html?src=' + encodeURIComponent(events.url);
  var description = 'playlist: ' + "<a href=\"" + events.url + "\">" + events.url + "</a>" + '<br>replay: ' + "<a href=\"" + hlsLink + "\">" + hlsLink + "</a>";
  $("#StreamPermalink").html(description);
  $("#HlsDate").text("session Start Date:" + new Date(events.t0));
  metricsDisplayed=true;
  showMetrics();
  refreshCanvas();
}

  