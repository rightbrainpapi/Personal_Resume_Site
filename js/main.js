// IFFY Function
(function (){ 
    // Function Logic Here.
    console.log("We are here") 
    // fadeDivInAndOut()
    getViewport()
    })();

var viewPortWidth;
var viewPortHeight;
var myAnimation = document.getElementById("myAnimation"); 
var cv = document.getElementById('resume');
var hint = document.getElementById("hinter");

function getViewport() {
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
      viewPortWidth = window.innerWidth,
      viewPortHeight = window.innerHeight
    }
   
   // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0) {
       viewPortWidth = document.documentElement.clientWidth,
       viewPortHeight = document.documentElement.clientHeight
    }
   
    // older versions of IE
    else {
      viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
      viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
   }




function scrollUp() {
    var animationHeight = myAnimation.offsetHeight;


    // alert(animationHeight);
    console.log(`myanimation height: ${animationHeight}`)
    console.log(`viewport height: ${viewPortHeight}`)
    if (viewPortHeight === animationHeight){
        var pos = 100;
        var id = setInterval(frame,5);
        function frame() {
        if (pos == 10) {
            clearInterval(id);
        } 
        else {
            pos--; 
            myAnimation.style.height = pos + 'vh';
        }
        }

        // Toggle the Resume Visibility
        // resumeFader();
        // enterFader();


 
        elementsToggler(cv, hint);
    }
    else if (viewPortHeight > animationHeight) {
        alert("doing something else");
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (pos == 100) {
            clearInterval(id);
          } else {
            pos++; 
            myAnimation.style.height = pos + '%'; 
            myAnimation.style.height = pos + '%'; 
          };
        };

        elementsToggler(cv, hint);
    }
    else{
        alert("do Nothing")
    };
  }


///////////////////////////////////////
///////////////////////////////////////
////////////elementsToggler////////////
///////////////////////////////////////
///////////////////////////////////////

  function elementsToggler(ele1, ele2) {

    // Opens Element 1: Toggles Opacity 1 and visibility visibile 
   console.log("something new")
    ele1.classList.toggle('open');

    // Closes Element 2: Toggles Opacity 0 and visibility hidden 
    console.log('even fired!');
    ele2.classList.toggle('close'); 
}


