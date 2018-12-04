
/* $(document).ready(function(){
    $("#animar").click(function(){
        $("var duration");
        
 
    });
    
});

var duration = animacion ({
   targets: '#duration .el',
   traslateX: 250,
   duration: 3000
    
}); */

var animateStrokeWidth = anime({
  targets: '.circle',
  strokeWidth: '25',
  autoplay: false
});

var animateX = anime({
  targets: '.circle',
  cx: window.innerWidth*0.6
});




