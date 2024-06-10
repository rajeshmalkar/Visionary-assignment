
let mode = document.getElementById('mode')
let currmode = 'light';

mode.addEventListener('click',() => {
    if (currmode == 'light'){
        currmode = 'dark';

        document.querySelector('body').style.background = 'black';
        document.querySelector('body').style.color = 'white';



    }

    else{
        currmode = 'light';

        document.querySelector('body').style.background = 'white';
        document.querySelector('body').style.color = 'black';


    }

    console.log(currmode)
})

function swap(){
    let icon = document.getElementById('mode').querySelector('i');

    if(icon.classList.contains('bi-toggle-off')){
        icon.classList.remove('bi-toggle-off');
        icon.classList.add('bi-toggle-on');
    } else {
        icon.classList.remove('bi-toggle-on');
        icon.classList.add('bi-toggle-off');
    }
}

let myCarousel = document.querySelector('#carouselExampleFade');
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1500,
  ride: 'carousel'
});
