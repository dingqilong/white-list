
  var grid;
  var columns = [
    {id: "title", name: "Title", field: "title"},
    {id: "duration", name: "Duration", field: "duration"},
    {id: "%", name: "% Complete", field: "percentComplete"},
    {id: "start", name: "Start", field: "start"},
    {id: "finish", name: "Finish", field: "finish"},
    {id: "effort-driven", name: "Effort Driven", field: "effortDriven"}
  ];

  for (var i = 0; i < columns.length; i++) {
    columns[i].header = {
      menu: {
        items: [
          {
            iconImage: "../images/sort-asc.gif",
            title: "Sort Ascending",
            command: "sort-asc"
          },
          {
            iconImage: "../images/sort-desc.gif",
            title: "Sort Descending",
            command: "sort-desc"
          },
          {
            title: "Hide Column",
            command: "hide",
            disabled: true,
            tooltip: "Can't hide this column"
          },
          {
            iconCssClass: "icon-help",
            title: "Help",
            command: "help"
          }
        ]
      }
    };
  }


  var options = {
    enableColumnReorder: false
  };

  $(function () {
    var data = [];
    for (var i = 0; i < 500; i++) {
      data[i] = {
        title: "Task " + i,
        duration: "5 days",
        percentComplete: Math.round(Math.random() * 100),
        start: "01/01/2009",
        finish: "01/05/2009",
        effortDriven: (i % 5 == 0)
      };
    }

    grid = new Slick.Grid("#myGrid", data, columns, options);

    var headerMenuPlugin = new Slick.Plugins.HeaderMenu({});

    headerMenuPlugin.onBeforeMenuShow.subscribe(function(e, args) {
      var menu = args.menu;

      // We can add or modify the menu here, or cancel it by returning false.
      var i = menu.items.length;
      menu.items.push({
        title: "Menu item " + i,
        command: "item" + i
      });
    });

    headerMenuPlugin.onCommand.subscribe(function(e, args) {
      alert("Command: " + args.command);
    });

    grid.registerPlugin(headerMenuPlugin);

  })
