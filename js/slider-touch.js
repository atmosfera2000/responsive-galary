/**
 * The script is necessary for mobile devices.
 * It uses touch event to slide pictures
 *
*/

// CSS classes
const sliderClass   = 'slider';
const itemClass     = 'item';
const touchClass    = 'touch';
const isHidden      = 'is-hidden';
const isNone        = 'is-none';

// Elements
const slider = document.querySelector(`.${sliderClass}`);
const loading = document.getElementById("loading");

window.onload = function() {    
    slider.classList.remove(isHidden);
    loading.classList.add(isNone);
};

slider.addEventListener('touchstart', event => useTouch(event));

function useTouch(event) {   
    let selected = event.target.closest(`.${itemClass}`);
    let items = slider.querySelectorAll(`.${itemClass}`);

    if (!selected) return;
    
    for (let item of items) {
        if (item != selected && item.classList.contains(touchClass)) {
            item.classList.remove(touchClass);
        }
    }
   
    if (!selected.classList.contains(touchClass)) {        
        selected.classList.add(touchClass);
    }    
}




    


