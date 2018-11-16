
  var grid;
  var data = [];
  var options = {
    editable: true,
    enableCellNavigation: true,
    asyncEditorLoading: false,
    autoEdit: false
  };
  var columns = [];

  $(function () {
    for (var i = 0; i < 100; i++) {
      var d = (data[i] = {});
      d[0] = "Row " + i;
    }

    var checkboxSelector = new Slick.CheckboxSelectColumn({
      cssClass: "slick-cell-checkboxsel"
    });

    columns.push(checkboxSelector.getColumnDefinition());

    for (var i = 0; i < 5; i++) {
      columns.push({
        id: i,
        name: String.fromCharCode("A".charCodeAt(0) + i),
        field: i,
        width: 100,
        editor: Slick.Editors.Text
      });
    }

    grid = new Slick.Grid("#myGrid", data, columns, options);
    grid.setSelectionModel(new Slick.RowSelectionModel({selectActiveRow: false}));
    grid.registerPlugin(checkboxSelector);

    var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, options);
  })
