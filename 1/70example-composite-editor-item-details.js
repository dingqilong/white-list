
  function requiredFieldValidator(value) {
    if (value == null || value == undefined || !value.length) {
      return {valid: false, msg: "This is a required field"};
    } else {
      return {valid: true, msg: null};
    }
  }

  var grid;
  var data = [];
  var columns = [
    {id: "title", name: "Title", field: "title", width: 120, cssClass: "cell-title", editor: Slick.Editors.Text, validator: requiredFieldValidator},
    {id: "desc", name: "Description", field: "description", width: 100, editor: Slick.Editors.Text},
    {id: "duration", name: "Duration", field: "duration", editor: Slick.Editors.Text},
    {id: "percent", name: "% Complete", field: "percentComplete", width: 80, resizable: false, formatter: Slick.Formatters.PercentCompleteBar, editor: Slick.Editors.PercentComplete},
    {id: "start", name: "Start", field: "start", minWidth: 60, editor: Slick.Editors.Date},
    {id: "finish", name: "Finish", field: "finish", minWidth: 60, editor: Slick.Editors.Date},
    {id: "effort-driven", name: "Effort Driven", width: 80, minWidth: 20, maxWidth: 80, cssClass: "cell-effort-driven", field: "effortDriven", formatter: Slick.Formatters.Checkmark, editor: Slick.Editors.Checkbox}
  ];
  var options = {
    editable: true,
    enableAddRow: true,
    enableCellNavigation: true,
    asyncEditorLoading: false,
    autoEdit: false
  };


  function openDetails() {
    if (grid.getEditorLock().isActive() && !grid.getEditorLock().commitCurrentEdit()) {
      return;
    }

    var $modal = $("<div class='item-details-form'></div>");

    $modal = $("#itemDetailsTemplate")
        .tmpl({
          context: grid.getDataItem(grid.getActiveCell().row),
          columns: columns
        })
        .appendTo("body");

    $modal.keydown(function (e) {
      if (e.which == $.ui.keyCode.ENTER) {
        grid.getEditController().commitCurrentEdit();
        e.stopPropagation();
        e.preventDefault();
      } else if (e.which == $.ui.keyCode.ESCAPE) {
        grid.getEditController().cancelCurrentEdit();
        e.stopPropagation();
        e.preventDefault();
      }
    });

    $modal.find("[data-action=save]").click(function () {
      grid.getEditController().commitCurrentEdit();
    });

    $modal.find("[data-action=cancel]").click(function () {
      grid.getEditController().cancelCurrentEdit();
    });


    var containers = $.map(columns, function (c) {
      return $modal.find("[data-editorid=" + c.id + "]");
    });

    var compositeEditor = new Slick.CompositeEditor(
        columns,
        containers,
        {
          destroy: function () {
            $modal.remove();
          }
        }
    );

    grid.editActiveCell(compositeEditor);
  }

  $(function () {
    for (var i = 0; i < 500; i++) {
      var d = (data[i] = {});

      d["title"] = "Task " + i;
      d["description"] = "This is a sample task description.\n  It can be multiline";
      d["duration"] = "5 days";
      d["percentComplete"] = Math.round(Math.random() * 100);
      d["start"] = "01/01/2009";
      d["finish"] = "01/05/2009";
      d["effortDriven"] = (i % 5 == 0);
    }

    grid = new Slick.Grid("#myGrid", data, columns, options);

    grid.onAddNewRow.subscribe(function (e, args) {
      var item = args.item;
      var column = args.column;
      grid.invalidateRow(data.length);
      data.push(item);
      grid.updateRowCount();
      grid.render();
    });


    grid.onValidationError.subscribe(function (e, args) {
      // handle validation errors originating from the CompositeEditor
      if (args.editor && (args.editor instanceof Slick.CompositeEditor)) {
        var err;
        var idx = args.validationResults.errors.length;
        while (idx--) {
          err = args.validationResults.errors[idx];
          $(err.container).stop(true, true).effect("highlight", {color: "red"});
        }
      }
    });

    grid.setActiveCell(0, 0);
  })
