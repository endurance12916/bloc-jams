let  pointsArray  =  document.getElementsByClassName('point');

let  animatePoints  =   function  (points)  {

        
    let  revealPoint  =   function  (index)  {            
        points[index].style.opacity  =  1;            
        points[index].style.transform  =  "scaleX(1) translateY(0)";            
        points[index].style.msTransform  =  "scaleX(1) translateY(0)";            
        points[index].style.WebkitTransform  =  "scaleX(1) translateY(0)";    
    };        
    forEach(points,  revealPoint);
};

window.onload = function () {
    // Automatically animate the points on a tall screen where scrolling can't trigger the animation
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

    let sellingPoints = document.getElementsByClassName('selling-points')[0];
    let scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    window.addEventListener("scroll", function (event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}