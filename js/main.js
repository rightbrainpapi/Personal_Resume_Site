// IFFY Function
// (function (){ 
//     // Function Logic Here.
//     console.log("We are here") 
//     // fadeDivInAndOut()
//     })();
var hint = document.getElementById('hinter');




function scrollUp() {
    // togglingDiv() 
    console.log("we in")
    var elem = document.getElementById("myAnimation");   
    var pos = 100;
    var id = setInterval(frame,5);
    function frame() {
      if (pos == 10) {
        clearInterval(id);
      } 
      else {
        pos--; 
        elem.style.height = pos + 'vh';
      }
    }

// Toggle the Resume Visibility
    resumeFader();
    // enterFader()
    closeFader(hint);


  }

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


    resumeFader();
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

///////////////////////////////////////
///////////////////////////////////////
//////////////resumeFader//////////////
///////////////////////////////////////
///////////////////////////////////////
  function resumeFader() {
      console.log("something new")
     var box = document.getElementById('boxer');
      box.classList.toggle('open');
      console.log('even fired!');
  }


///////////////////////////////////////
///////////////////////////////////////
//////////////resumeFader//////////////
///////////////////////////////////////
///////////////////////////////////////
// function enterFader() {
//     console.log("We Are in the EnterFader")
//    var hint = document.getElementById('hinter');
//     hint.classList.toggle('close');
//     console.log('even fired!');
// }



// ///////////////////////////////////////
// var hint = document.getElementById('hinter');

function closeFader(ele){
    console.log("We Are in the EnterFader")
   
    ele.classList.toggle('close');
    console.log('even fired!');
}






