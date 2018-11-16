
  function requiredFieldValidator(value) {
    if (value == null || value == undefined || !value.length) {
      return {valid: false, msg: "This is a required field"};
    } else {
      return {valid: true, msg: null};
    }
  }

  function waitingFormatter(value) {
    return "wait...";
  }

  function renderSparkline(cellNode, row, dataContext, colDef) {
    var vals = [
      dataContext["n1"],
      dataContext["n2"],
      dataContext["n3"],
      dataContext["n4"],
      dataContext["n5"]
    ];

    $(cellNode).empty().sparkline(vals, {width: "100%"});
  }

  var grid;
  var data = [];
  var columns = [
    {id: "title", name: "Title", field: "title", sortable: false, width: 120, cssClass: "cell-title"},
    {id: "n1", name: "1", field: "n1", sortable: false, editor: Slick.Editors.Integer, width: 40, validator: requiredFieldValidator},
    {id: "n2", name: "2", field: "n2", sortable: false, editor: Slick.Editors.Integer, width: 40, validator: requiredFieldValidator},
    {id: "n3", name: "3", field: "n3", sortable: false, editor: Slick.Editors.Integer, width: 40, validator: requiredFieldValidator},
    {id: "n4", name: "4", field: "n4", sortable: false, editor: Slick.Editors.Integer, width: 40, validator: requiredFieldValidator},
    {id: "n5", name: "5", field: "n5", sortable: false, editor: Slick.Editors.Integer, width: 40, validator: requiredFieldValidator},
    {id: "chart", name: "Chart", sortable: false, width: 60, formatter: waitingFormatter, rerenderOnResize: true, asyncPostRender: renderSparkline}
  ];

  var options = {
    editable: true,
    enableAddRow: false,
    enableCellNavigation: true,
    asyncEditorLoading: false,
    enableAsyncPostRender: true
  };


  $(function () {
    for (var i = 0; i < 500; i++) {
      var d = (data[i] = {});

      d["title"] = "Record " + i;
      d["n1"] = Math.round(Math.random() * 10);
      d["n2"] = Math.round(Math.random() * 10);
      d["n3"] = Math.round(Math.random() * 10);
      d["n4"] = Math.round(Math.random() * 10);
      d["n5"] = Math.round(Math.random() * 10);
    }

    grid = new Slick.Grid("#myGrid", data, columns, options);
  })
