var $galleryhover = document.querySelector(".gallery-hover");
var $totalGalleryImages = 11;
var $images = {};
var $mouseX;
var $mouseY;

for(var x=0;x <= $totalGalleryImages;x++){
$images[x] = document.getElementsByClassName("img-gallery")[x]; 
}

 document.querySelector("html").addEventListener("mousemove",function(e){
    $mouseX = e.clientX;
    $mouseY = e.clientY;
})




