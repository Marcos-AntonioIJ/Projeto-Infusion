var $galleryhover = document.querySelector(".gallery-hover");
var $totalGalleryImages = 11;
var $images = {};
for(var x=0;x <= $totalGalleryImages;x++){
$images[x] = document.getElementsByClassName("img-gallery")[x]; 
}


for(var x=0;x <= $totalGalleryImages;x++){
$images[x].addEventListener('mouseover', function(){ 
   console.log($galleryhover.);
})
}

$mouse = function(e){
    $mouseX = e.
}