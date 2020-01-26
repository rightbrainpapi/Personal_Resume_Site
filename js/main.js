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
function closering() {
    var elem = document.getElementById("myAnimation");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 100) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.height = pos + '%'; 
        elem.style.height = pos + '%'; 
      }
    }
  }

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

 


