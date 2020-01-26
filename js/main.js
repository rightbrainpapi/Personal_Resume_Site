
var x = document.getElementsByClassName("content");
(function (){ 
    // Function Logic Here.
    console.log("We are here") 
    // fadeDivInAndOut()
    })();


if (document.querySelector(".box").style.display == 'block') { 
    alert('this Element is block'); 
  }


function scrollUp() {
    // togglingDiv() 
    console.log("we in")
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

   
    // fadeDivInAndOut()
    toggleEntrance();


  }

  function closering() {
    // togglingDiv() 
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


    toggleEntrance();
  }



// Check if element is 100
// if element is 100 
//      set var pos = 0
//      check if pos is 100
//      if (pos == 100)
//          [] clearInterval which is to say stop
//          [] return
//      else pos is less than 100
//          [] pos++; 
//              element.style.height = pos + '%'
//          [] return


// Check if element is 30
// if element is 30
//      set var pos = 100
//      check if pos is 30
//      if (pos == 30)
//          [] clearInterval which is to say stop
//          [] return    
//      else pos is greater than 30
//          [] pos--;
//              element.style.height = pos + '%'
//          [] return


 // 

  function toggleEntrance() {
      console.log("something new")
     var box = document.getElementById('box');
      box.classList.toggle('open');
      console.log('even fired!');
  }


