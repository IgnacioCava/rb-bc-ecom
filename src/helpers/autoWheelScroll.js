export default function autoWheelScroll(wheelEvent, element, direction, distance){
    let dir = direction==='x'? 'scrollLeft' : 'scrollTop'
    let dis = distance==='page'
    ? direction==='x' ? element.clientWidth : element.children[0].clientWidth
    : direction==='y' ? element.clientHeight : element.children[0].clientHeight
    element[dir] += (wheelEvent.deltaY>0?dis:-dis)
}

// This function allows for horizontal page scrolling using the mouse wheel.
// However, since DOM manipulation is rather straightforward, I always try to make my utility functions as generalized as possible.

// This takes the following parameters:
// wheelEvent: The event object that is passed to the function. I only use this to know if the scroll is going up or down (left or right, respectively).
// element: the HTML element that is being scrolled.
// direction: The direction of the scrolling. Can be either 'x' or 'y' (not really, but I'm the only one who's gonna be using this, so whatever).
// distance: The distance the element will be scrolled. Can be either 'page' or 'child' (same as above).
