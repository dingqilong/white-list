
      function run () {
        var parser = buildGrammar($("#grammar").val());
        console.log(parser);
        parser.states.forEach(addState);
        parser.states.forEach(linkNodes);
      }

      function buildGrammar (val) {
        var type = $("#type")[0].options[$("#type")[0].selectedIndex].value || "slr";

        var grammar = val,
            cfg;
        try {
            cfg = JSON.parse(grammar);
        } catch(e) {
            try {
                cfg = bnf.parse(grammar);
            } catch (e) {
                return alert("Oops. Make sure your grammar is in the correct format.\n"+e); 
            }
        }

        Jison.print = function () {};
        return new Jison.Generator(cfg, {type: type,noDefaultResolve:true});
      }

      function linkNodes (state, i) {
        var node = $("#state_"+i);
        for (var edge in state.edges) if (state.edges.hasOwnProperty(edge)) {
          node.plumb({target: "state_"+state.edges[edge]});
        }
      }

      function addState (state, i) {
        var node = $("<div class='state'>").attr("id", "state_"+i).css({'top': i*270, left: i*250}).html(state.join('<br />'));
        $("#states").append(node);
      }

      $(document).ready(function () {
        jsPlumb.DEFAULT_DRAG_OPTIONS = { cursor: 'pointer', zIndex:2000 };
        jsPlumb.DEFAULT_PAINT_STYLE = {lineWidth:10, strokeStyle:'rgba(0, 0, 200, 0.5)'};
        $("#process_btn").click(run);
      });
    