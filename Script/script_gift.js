const video = document.querySelector(".gift");

video.addEventListener("click", function() {
    video.play();
});

video.addEventListener("ended", function(){
    video.style.opacity = "0";
    setTimeout(() => {
        video.style.display = "none";
    }, 4000);
});