
  var grid,
      data = [],
      columns = [
          { id: "title", name: "Title", field: "title", width: 120 },
          { id: "duration", name: "Duration", field: "duration", width: 120 },
          { id: "%", name: "% Complete", field: "percentComplete", width: 120 },
          { id: "start", name: "Start", field: "start", width: 120 },
          { id: "finish", name: "Finish", field: "finish", width: 120 },
          { id: "effort-driven", name: "Effort Driven", field: "effortDriven", width: 120 },
          { id: "c7", name: "C7", field: "c7", width: 120 },
          { id: "c8", name: "C8", field: "c8", width: 120 },
          { id: "c9", name: "C9", field: "c9", width: 120 },
          { id: "c10", name: "C10", field: "c10", width: 120 },
          { id: "c11", name: "C11", field: "c11", width: 120 },
          { id: "c12", name: "C12", field: "c12", width: 120 },
          { id: "c13", name: "C13", field: "c13", width: 120 },
          { id: "c14", name: "C14", field: "c14", width: 120 },
          { id: "c15", name: "C15", field: "c15", width: 120 },
          { id: "c16", name: "C16", field: "c16", width: 120 },
          { id: "c17", name: "C17", field: "c17", width: 120 }
      ],
      options = {
        enableCellNavigation: false,
        enableColumnReorder: false
      };

  for (var i = 10000; i-- > 0;) {
    data[i] = {
        title: "Task " + i,
        duration: "5 days",
        percentComplete: Math.round(Math.random() * 100),
        start: "01/01/2009",
        finish: "01/05/2009",
        effortDriven: (i % 5 == 0),
        c7: "C7-" + i,
        c8: "C8-" + i,
        c9: "C9-" + i,
        c10: "C10-" + i,
        c11: "C11-" + i,
        c12: "C12-" + i,
        c13: "C13-" + i,
        c14: "C14-" + i,
        c15: "C15-" + i,
        c16: "C16-" + i,
        c17: "C17-" + i
    };
  }

  grid = new Slick.Grid("#container", data, columns, options);
