const nextBtn = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movielist=[
    "videos/hero-1.mp4",
    "videos/hero-2.mp4",
    "videos/hero-3.mp4",
    "videos/hero-4.mp4",
]
let index = 0;

nextBtn.addEventListener('click',function(){
    index++;
    if(index >= movielist.length){
        index = 0;
    }
    video.src = movielist[index];
    video.play();
})