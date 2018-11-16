
			/* Title: Using jQuery UI $.Observable
			 * Description: Using jQuery UI $.Observable (which is currently still under development), when objects/collections of data are changed or updated, events are triggered to inform any observers of the change
			 */

			/*$.observers example by @addyosmani*/

			var myData = [], 
			    observer = $.observer(myData);

			function dataChange( data ){
			   console.log('New data arrived with ID ' + data[0].id + ' and value ' + data[0].title);   
			}

			$(observer).bind("change", function ( e ) { 
			    dataChange( e.target.data );
			});

			$.observable( myData ).insert({
			                id: myData.length + 1,
			                title: 'test'
			            });
			
			// References
			// https://gist.github.com/1321768
		