var center  = document.querySelector(".center");


center.addEventListener("mousemove",function(dets){

    var rectangleLocation= center.getBoundingClientRect();
   var insideRect = dets.clientX - rectangleLocation.left

   if(insideRect < rectangleLocation.width/2){
    var redcolor = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insideRect);
    gsap.to(center ,{
        backgroundColor:`rgb(${redcolor},0,0)`,
        ease:Power4,
    })

   }
   else{
    var bluecolor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insideRect);
    gsap.to(center ,{
        backgroundColor:`rgb(0,0,${bluecolor})`,
        ease:Power4,
    })   
   }
})


center.addEventListener("mouseleave",function(){
    gsap.to(center,{
        backgroundColor: 'white'
    })
})