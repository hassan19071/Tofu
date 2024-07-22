// show and hide menu links
let xBtn = document.getElementById("x-btn");
let openBtn = document.getElementById("open-btn");
let mobileLinksContainer = document.getElementById("mobile-links-container");

xBtn.addEventListener("click",()=>{
    mobileLinksContainer.classList.add("hidden")
})
openBtn.addEventListener("click",()=>{
    mobileLinksContainer.classList.remove("hidden");
})

// open video
document.addEventListener("DOMContentLoaded", function() {
    const videoCover = document.getElementById("videoCover");
    const videoOverlay = document.getElementById("videoOverlay");
    const videoFrame = document.getElementById("videoFrame");
    const playIcon = document.getElementById("playIcon");
    const loading = document.getElementById("loading");

    videoCover.addEventListener("click", function() {
        videoOverlay.classList.add("active");
        loading.style.display = "block";
        videoFrame.src = "https://www.youtube.com/embed/9iqyIq7x2e0?autoplay=1";
        document.body.style.overflowY = "hidden"
    });

    videoFrame.addEventListener("load", function() {
        loading.style.display = "none";
        videoFrame.style.display = "block";
    });

    videoOverlay.addEventListener("click", function(event) {
        if (event.target === videoOverlay) {
            videoOverlay.classList.remove("active");
            videoFrame.src = "";
            videoFrame.style.display = "none";
            loading.style.display = "none";
            document.body.style.overflowY = "auto"
        }
    });
});