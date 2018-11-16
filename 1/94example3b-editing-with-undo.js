
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
    {id: "desc", name: "Description", field: "description", width: 100, editor: Slick.Editors.LongText},
    {id: "duration", name: "Duration", field: "duration", editor: Slick.Editors.Text},
    {id: "%", name: "% Complete", field: "percentComplete", width: 80, resizable: false, formatter: Slick.Formatters.PercentCompleteBar, editor: Slick.Editors.PercentComplete},
    {id: "start", name: "Start", field: "start", minWidth: 60, editor: Slick.Editors.Date},
    {id: "finish", name: "Finish", field: "finish", minWidth: 60, editor: Slick.Editors.Date},
    {id: "effort-driven", name: "Effort Driven", width: 80, minWidth: 20, maxWidth: 80, cssClass: "cell-effort-driven", field: "effortDriven", formatter: Slick.Formatters.Checkmark, editor: Slick.Editors.Checkbox}
  ];

  var options = {
    editable: true,
    enableAddRow: false,
    enableCellNavigation: true,
    asyncEditorLoading: false,
    autoEdit: false,
    editCommandHandler: queueAndExecuteCommand
  };

  var commandQueue = [];

  function queueAndExecuteCommand(item, column, editCommand) {
    commandQueue.push(editCommand);
    editCommand.execute();
  }

  function undo() {
    var command = commandQueue.pop();
    if (command && Slick.GlobalEditorLock.cancelCurrentEdit()) {
      command.undo();
      grid.gotoCell(command.row, command.cell, false);
    }
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
  })
