document.addEventListener("DOMContentLoaded", function() {
    const wallpaper = [
        "/imgs/bkg1.jpg",
        "/imgs/bkg2.png",
        "/imgs/bkg3.png",
        "/imgs/bkg4.png",
        "/imgs/bkg5.png"
    ];
    
    let lastIndex = parseInt(localStorage.getItem('wallpaperIndex')) || 0;
    const chosenWallpaper = wallpaper[lastIndex];
    lastIndex = (lastIndex + 1) % wallpaper.length;
    localStorage.setItem('wallpaperIndex', lastIndex);

    const bgImg = document.querySelector('.background img');

    if (bgImg) {
        bgImg.src = chosenWallpaper;
    }
})