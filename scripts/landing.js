                 var animatePoints = function () {

                     var points = document.getElementsByClassName('point');

                     var revealPoint = function() {
                         for (let i of points) {
                                i.style.opacity = 1;
                                i.style.transform = "scaleX(1) translateY(0)";
                                i.style.msTransform = "scaleX(1) translateY(0)";
                                i.style.WebkitTransform = "scaleX(1) translateY(0)";
                         }
                     };
                     revealPoint();
                 };
                 
