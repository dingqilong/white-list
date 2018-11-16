
//    addEventListener( "load", init, false );

    function init( event ) {
        $("#redux").eraser();
    }

    function remove(event) {
        $("#redux").eraser('clear');
        event.preventDefault();
    }

    function reset(event) {
        $("#redux").eraser('reset');
        event.preventDefault();
    }

    function grow(event) {
        $("#redux").eraser("size",200);
        event.preventDefault();
    }
    init();
