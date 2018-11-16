
  var grid;
  var data = [];
  var options = {
    enableCellNavigation: true
  };
  var columns = [];
  var columnsWithHighlightingById = {};


  // Set up some test columns.
  for (var i = 0; i < 10; i++) {
    columns.push({
      id: i,
      name: String.fromCharCode("A".charCodeAt(0) + i),
      field: i,
      width: 90,
      sortable: true,
      formatter: highlightingFormatter,
      header: {
        buttons: [
          {
            cssClass: "icon-highlight-off",
            command: "toggle-highlight",
            tooltip: "Highlight negative numbers."
          }
        ]
      }
    });
  }

  // Set multiple buttons on the first column to demonstrate overflow.
  columns[0].name = "Resize me!";
  columns[0].header = {
    buttons: [
      {
        image: "../images/tag_red.png"
      },
      {
        image: "../images/comment_yellow.gif"
      },
      {
        image: "../images/info.gif"
      },
      {
        image: "../images/help.png"
      }
    ]
  };

  // Set a button on the second column to demonstrate hover.
  columns[1].name = "Hover me!";
  columns[1].header = {
    buttons: [
      {
        image: "../images/help.png",
        showOnHover: true,
        tooltip: "This button only appears on hover.",
        handler: function(e) {
          alert('Help');
        }
      }
    ]
  };



  // Set up some test data.
  for (var i = 0; i < 100; i++) {
    var d = (data[i] = {});
    d["id"] = i;
    for (var j = 0; j < columns.length; j++) {
      d[j] = Math.round(Math.random() * 10) - 5;
    }
  }


  function highlightingFormatter(row, cell, value, columnDef, dataContext) {
    if (columnsWithHighlightingById[columnDef.id] && value < 0) {
      return "<div style='color:red; font-weight:bold;'>" + value + "</div>";
    } else {
      return value;
    }
  }



  $(function () {
    grid = new Slick.Grid("#myGrid", data, columns, options);

    var headerButtonsPlugin = new Slick.Plugins.HeaderButtons();

    headerButtonsPlugin.onCommand.subscribe(function(e, args) {
      var column = args.column;
      var button = args.button;
      var command = args.command;

      if (command == "toggle-highlight") {
        if (button.cssClass == "icon-highlight-on") {
          delete columnsWithHighlightingById[column.id];
          button.cssClass = "icon-highlight-off";
          button.tooltip = "Highlight negative numbers."
        } else {
          columnsWithHighlightingById[column.id] = true;
          button.cssClass = "icon-highlight-on";
          button.tooltip = "Remove highlight."
        }

        grid.invalidate();
      }
    });

    grid.registerPlugin(headerButtonsPlugin);
  });
