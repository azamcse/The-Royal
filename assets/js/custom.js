
$(document).ready(function(){
    $(".trending_bottom_wrap").owlCarousel({
        items:3,
        loop:true,
        nav:true,
        dots:false,
        margin:20,
        responsive:{
            0:{
                items:1,
                loop:true,
                autoplay:true,
                smartSpeed:1000,
             
             768:{
                items:3,
               
            },
            
        }
    });
  });



//   toggle menu

var toggleBtn = document.getElementById("toggler"); 
var mainNavItem = document.getElementById("mainNavInnerItem"); 
toggleBtn.addEventListener('click' , function(){
    mainNavItem.classList.toggle("mainNavInnerItemToggle") 
})
document.getElementById("overlayArea").addEventListener("click", function(){
    mainNavItem.classList.remove("mainNavInnerItemToggle") 
})
