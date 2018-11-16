
			/* Title: Using jQuery 1.7's $.Callbacks() feature
			 * Description: $.Callbacks are a multi-purpose callbacks list object which can be used as a base layer to build new functionality including simple publish/subscribe systems. We haven't yet released the API documentation for this feature just yet, more information on it (including lots of examples) here: http://addyosmani.com/blog/jquery-1-7s-callbacks-feature-demystified/.
			 */

			var topics = {};

			jQuery.Topic = function( id ) {
			    var callbacks,
			        topic = id && topics[ id ];
			    if ( !topic ) {
			        callbacks = jQuery.Callbacks();
			        topic = {
			            publish: callbacks.fire,
			            subscribe: callbacks.add,
			            unsubscribe: callbacks.remove
			        };
			        if ( id ) {
			            topics[ id ] = topic;
			        }
			    }
			    return topic;
			};

			function fn1( value ){
				console.log( value );
			}

			function fn2( value ){
				fn1("fn2 says:" + value);
				return false;
			}

			// Usage:
			// Subscribers
			$.Topic( 'mailArrived' ).subscribe( fn1 );
			$.Topic( 'mailArrived' ).subscribe( fn2 );
			$.Topic( 'mailSent' ).subscribe( fn1 );

			// Publisher
			$.Topic( 'mailArrived' ).publish( 'hello world!' );
			$.Topic( 'mailSent' ).publish( 'woo! mail!' );

			//  Here, 'hello world!' gets pushed to fn1 and fn2
			//  when the 'mailArrived' notification is published
			//  with 'woo! mail!' also being pushed to fn1 when
			//  the 'mailSent' notification is published.
			/*
			output:
			hello world!
			fn2 says: hello world!
			woo! mail!
			*/

			// References
			// https://gist.github.com/1321768
		