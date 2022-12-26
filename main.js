// colors Array
let colors = ['blue','white','red','black','brown','green'];
// get button
let button = document.getElementById('button');
//add event listener
button.addEventListener('click',function(){
    //randomizer
    var randomcolor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomcolor;
})