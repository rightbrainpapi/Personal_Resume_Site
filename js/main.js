console.log("We are here")

// var logocon = document.getElementsByClassName("logocon");

// logocon

// function myFunction() {
//     console.log("hello World");
//     logocon.animate
    
//   }

  
// skrollr.init();
// $(".logocon").click(function(){
//   $("html, body").animate({ scrollTop: 1000 });
// });


function myMove() {
    var elem = document.getElementById("myAnimation");   
    var pos = 100;
    var id = setInterval(frame,5);
    function frame() {
      if (pos == 30) {
        clearInterval(id);
      } 
      else {
        pos--; 
        elem.style.height = pos + 'vh'; 
      //   elem.style.height = pos + 'vh'; 
      }
    }
  }


