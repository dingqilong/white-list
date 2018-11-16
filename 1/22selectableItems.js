
	$(function() {
            $("#selectable").selectable({
              stop: function() {
                var infodiv = $("#infodiv").empty();
                $(".ui-selected", this).each(function() {
                  var that_id = this.id;
                  infodiv.append(' #' + that_id);
                  });
              }
              });
            $("button").button();
            $("button").click(function() {
              var list_disabled = $("#selectable").selectable("option", "disabled");
              $("#infodiv").find('p').html('Disabled: ' + !list_disabled);
              $("#selectable").selectable("option", "disabled", !list_disabled);
              });
	});
	