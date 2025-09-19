const shareButton = document.getElementById("share");
// const infoBar = document.getElementById("info");
const iconsBar = document.getElementById("bar-socialLink-icons");
const shareIcon = document.getElementById("shr")

function showIconsBar(){
    // console.log("click");
    // infoBar.classList.toggle("hiden");
    iconsBar.classList.toggle("hiden");
    shareIcon.classList.toggle("svg-colored");
    shareButton.classList.toggle("btn-bg");
};

shareButton.addEventListener('click',()=>showIconsBar());