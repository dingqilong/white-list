
          var total=new Function("item","tax","return item+=tax");
          document.write(total(20000,3000));
          
          
          
          function makeSum(item, tax){
              var total=item+tax;
              return total;
          }
         
          document.write( makeSum(10000,1500));
        