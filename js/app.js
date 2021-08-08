"use strict"
// load content
window.addEventListener('load', (event) => {
  document.body.style.opacity = 1;
});
// Switch button > slide down
let btn = document.querySelector('.switch');
let dot = document.querySelector('.dot');
let h = window.innerHeight;
function scrollBottom(x, y) {
    window.scroll(x, y);
  }
btn.addEventListener('click', function(){
    dot.classList.toggle('move');
    scrollBottom(0, h * 2)
})

// Accordion
let buttons = document.querySelectorAll('.link');
let divs = document.querySelectorAll('.p-single');
for(let i =0; i < buttons.length; i++){
  // Hide all divs except first one that is default
    divs[i].style.display = 'none';
    divs[0].style.display = "block";
    //First link (default) with class border
    buttons[0].classList.add('border');

    buttons[i].addEventListener('click', e => {
    //After click on any other link, first one should disappear
    divs[0].style.display = "none";
    // Prevent default link behaviour
    e.preventDefault();

    // Find elements with given class and remove. It makes only one div active at time
    let accord = document.querySelectorAll('.p-single.active');

    for(let i =0; i < accord.length;  i++){
        accord[i].classList.remove('active');
    }
    if (divs[i].classList.contains('active')) {
      divs[i].classList.remove('active');
    }

    // Remove border class for non active elements
    for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.remove('border')
    }
    
    
    divs[i].classList.toggle('active');
    divs[i].style.display = 'block';
    
    //Add styles for current clicked link
    buttons[i].classList.toggle('border')
    })
}

   
    


  


