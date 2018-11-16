
      $(function(){
         var svg = d3.select('#wrap')
         svg.append('path')
            .attr("stroke",'#333')
            .attr("stroke-width", "2")
            .attr("stroke-dasharray","10 10")
            .attr("d",'M20,20 L200,200')
            .attr("marker-end","url(#arrow)")
      })
   