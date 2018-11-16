
		var grid;
		var data = [];
        var extraColumns = 100;

		function testPostRender(cellNode, row, dataContext, colDef) {
			cellNode.style.backgroundColor = 'yellow';
		}

		var columns = [
			{id:"title", name:"Title", field:"title", width:120, cssClass:"cell-title"},
			{id:"duration", name:"Duration", field:"duration", selectable:false},
			{id:"%", name:"% Complete", field:"percentComplete", width:80, resizable:false, formatter:Slick.Formatters.PercentCompleteBar},
			{id:"start", name:"Start", field:"start", minWidth:60},
			{id:"finish", name:"Finish", field:"finish", minWidth:60},
			{id:"effort-driven", name:"Effort Driven", width:80, minWidth:20, maxWidth:80, cssClass:"cell-effort-driven", field:"effortDriven", formatter:Slick.Formatters.Checkmark, asyncPostRender:testPostRender}
		];

        for (var i=0; i<extraColumns; i++) {
            columns.push({id:"col" + i, name:"col" + i, field:"title"});
        }

		var options = {
			editable: false,
			enableAddRow: false,
			enableCellNavigation: true,
			enableAsyncPostRender: true,
            forceFitColumns: false
		};


		$(function()
        {
            // prepare the data
            for (var i = 0; i < 5000; i++) {
                var d = (data[i] = {});

                d["id"] = "id_" + i;
                d["title"] = "Task " + i;
                d["duration"] = "5 days";
                d["percentComplete"] = Math.round(Math.random() * 100);
                d["start"] = "01/01/2009";
                d["finish"] = "01/05/2009";
                d["effortDriven"] = (i % 5 == 0);
            }


            data.getItemMetadata = function (row) {
              if (row % 2 === 1) {
                return {
                  "columns": {
                    "duration": {
                      "colspan": 3
                    }
                  }
                };
              }
            };

            // initialize the grid
            grid = new Slick.Grid("#myGrid", data, columns, options);

            $grid = $("#myGrid div.grid-canvas").parent();
        });


        var $grid;
        var lastScrollTop = 0;
        var startTime;
        var scrollAmount = 1000;

		function startBench(scroll) {
			scrollAmount = scroll;
			lastScrollTop = 0;
			$grid.scrollTop(0);

			window.setTimeout(function(){
				startTime = new Date();
				bench();
			}, 500);
		}

        function bench() {
            var scrollTop = $grid[0].scrollTop = lastScrollTop + scrollAmount;

            if ($grid[0].scrollTop == lastScrollTop + scrollAmount) {
                lastScrollTop = scrollTop;
                window.setTimeout(bench, 10);
            }
            else {
				alert((new Date() - startTime));
            }
        }

		