var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details) {
    var rectangleLocation = rect.getBoundingClientRect();
    var insideRect = Math.floor(details.clientX - rectangleLocation.left);
    // console.log(insideRect);
    if(insideRect < rectangleLocation.width/2){
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255 , 0, insideRect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        })
        // console.log(redColor);
    }
    else{
        var blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0 , 255 , insideRect);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        })
    }
});

rect.addEventListener("mouseleave", function(details) {
    gsap.to(rect, {
        backgroundColor: "white",
    })
})