function prevSlide() {
    var current = jQuery( '#codeslides .current' ),
        prev = current.prev();
    if ( prev.length ) {
        prev.addClass( 'current' );
        current.removeClass( 'current' );
    }
}

function nextSlide() {
    var current = jQuery( '#codeslides .current' ),
        next = current.next();
    if ( next.length ) {
        next.addClass( 'current' );
        current.removeClass( 'current' );
    }
}

function prevExample() {
    var currentSlide = jQuery( '#codeslides section.current' ),
        currentExample = currentSlide.find( '.example.current' ),
        prev = currentExample.prevAll( '.example' ).first();
    if ( prev.length ) {
        prev.addClass( 'current' );
        currentExample.removeClass( 'current' );
    } else if ( !currentExample.length ) {
        currentSlide.find( '.example:last-child' ).addClass( 'current' );
    } else {
        currentExample.removeClass( 'current' );
    }
}

function nextExample() {
    var currentSlide = jQuery( '#codeslides section.current' ),
        currentExample = currentSlide.find( '.example.current' ),
        next = currentExample.nextAll( '.example' ).first();
    if ( next.length ) {
        next.addClass( 'current' );
        currentExample.removeClass( 'current' );
    } else if ( !currentExample.length ) {
        console.log(currentSlide, currentSlide.find( '.example' ), currentSlide.find( '.example' ).first());
        currentSlide.find( '.example' ).first().addClass( 'current' );
    } else {
        currentExample.removeClass( 'current' );
    }
}

function init($) {
    $( '#codeslides section:first-child' ).addClass( 'current' );
    $(document).keydown(function(e) {
            // The key codes > 50 are numpad numbers
        switch(e.keyCode) {
            case 37: // left
            case 100:
                prevSlide();
                break;

            case 38:
            case 104: // up
                prevExample();
                break;

            case 39:
            case 102: // right
                nextSlide();
                break;

            case 40:
            case 98: // down
                nextExample();
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
}

$(init);
