$(document).ready(function(){
  var stars=300;
  var $stars=$(".stars");
  var r=800;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
      arr = $star;
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*0.8);
    var curR=r+(Math.random()*600);
    cur.css({ 
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(200px,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
       
    })
  })
})



$(".my_audio").trigger('load');

function play_audio(task) {
      if(task == 'play'){
           $(".my_audio").trigger('play');
      }
      if(task == 'stop'){
           $(".my_audio").trigger('pause');
           $(".my_audio").prop("currentTime",0);
      }
 }