
  var grid;
  var data = [];
  var columns = [
    {id: "title", name: "Title", field: "title", width: 200, cssClass: "cell-title", editor: Slick.Editors.Text},
    {id: "priority", name: "Priority", field: "priority", width: 80, selectable: false, resizable: false}
  ];

  var options = {
    editable: true,
    enableAddRow: false,
    enableCellNavigation: true,
    asyncEditorLoading: false,
    rowHeight: 30
  };

  $(function () {
    for (var i = 0; i < 100; i++) {
      var d = (data[i] = {});
      d["title"] = "Task " + i;
      d["priority"] = "Medium";
    }

    grid = new Slick.Grid("#myGrid", data, columns, options);

    grid.onContextMenu.subscribe(function (e) {
      e.preventDefault();
      var cell = grid.getCellFromEvent(e);
      $("#contextMenu")
          .data("row", cell.row)
          .css("top", e.pageY)
          .css("left", e.pageX)
          .show();

      $("body").one("click", function () {
        $("#contextMenu").hide();
      });
    });

    grid.onClick.subscribe(function (e) {
      var cell = grid.getCellFromEvent(e);
      if (grid.getColumns()[cell.cell].id == "priority") {
        if (!grid.getEditorLock().commitCurrentEdit()) {
          return;
        }

        var states = { "Low": "Medium", "Medium": "High", "High": "Low" };
        data[cell.row].priority = states[data[cell.row].priority];
        grid.updateRow(cell.row);
        e.stopPropagation();
      }
    });
  });

  $("#contextMenu").click(function (e) {
    if (!$(e.target).is("li")) {
      return;
    }
    if (!grid.getEditorLock().commitCurrentEdit()) {
      return;
    }
    var row = $(this).data("row");
    data[row].priority = $(e.target).attr("data");
    grid.updateRow(row);
  });
