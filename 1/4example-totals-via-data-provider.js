
  var grid;
  var data = [];
  var options = {
    enableCellNavigation: true,
    headerRowHeight: 30,
    editable: true
  };

  var columns = [];
  for (var i = 0; i < 10; i++) {
    columns.push({
      id: i,
      name: String.fromCharCode("A".charCodeAt(0) + i),
      field: i,
      width: 60,
      editor: Slick.Editors.Integer
    });
  }



  function TotalsDataProvider(data, columns) {
    var totals = {};
    var totalsMetadata = {
      // Style the totals row differently.
      cssClasses: "totals",
      columns: {}
    };

    // Make the totals not editable.
    for (var i = 0; i < columns.length; i++) {
      totalsMetadata.columns[i] = { editor: null };
    }


    this.getLength = function() {
      return data.length + 1;
    };

    this.getItem = function(index) {
      return (index < data.length) ? data[index] : totals;
    };

    this.updateTotals = function() {
      var columnIdx = columns.length;
      while (columnIdx--) {
        var columnId = columns[columnIdx].id;
        var total = 0;
        var i = data.length;
        while (i--) {
          total += (parseInt(data[i][columnId], 10) || 0);
        }
        totals[columnId] = "Sum:  " + total;
      }
    };

    this.getItemMetadata = function(index) {
      return (index != data.length) ? null : totalsMetadata;
    };

    this.updateTotals();
  }



  $(function () {
    for (var i = 0; i < 10; i++) {
      var d = (data[i] = {});
      d["id"] = i;
      for (var j = 0; j < columns.length; j++) {
        d[j] = Math.round(Math.random() * 10);
      }
    }

    var dataProvider = new TotalsDataProvider(data, columns);

    grid = new Slick.Grid("#myGrid", dataProvider, columns, options);

    grid.onCellChange.subscribe(function(e, args) {
      // The data has changed - recalculate the totals.
      dataProvider.updateTotals();

      // Rerender the totals row (last row).
      grid.invalidateRow(dataProvider.getLength() - 1);
      grid.render();
    });
  })
