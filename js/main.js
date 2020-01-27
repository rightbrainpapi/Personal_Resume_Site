/////////////////////////////
///////IFFE Initializer//////
/////////////////////////////
(function (){ 
    getViewport()
    })();

/////////////////////////////
///////Global Variables//////
/////////////////////////////

var viewPortWidth;
var viewPortHeight;
var myAnimation = document.getElementById("myAnimation"); 
var cv = document.getElementById('resume');
var hint = document.getElementById("hinter");



///////////////////////////////////////
///////////////////////////////////////
//////////////getViewport//////////////
///////////////////////////////////////
///////////////////////////////////////

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


////////////////////////////////////////
////////////////////////////////////////
////////////animationScroller///////////
////////////////////////////////////////
////////////////////////////////////////

function animationScroller() {
    var animationHeight = myAnimation.offsetHeight;
    // Checking if heights are equal
    if (viewPortHeight === animationHeight){
        // SCROLL UP
        var pos = 100; // start scrolling with animation at 100 (100% of the screens vh)
        var id = setInterval(frame,15);
        function frame() {
        if (pos == 10) {
            clearInterval(id); // once pos is equal to 10 stop the scrolling
        } 
        else {
            pos--;  // subtract 1 from pos until pos is equal to 10
            myAnimation.style.height = pos + '%';
        }
        }

        // Toggling the visibility of the resume and the enter hint
        elementsToggler(cv, hint);
    }
    else if (viewPortHeight > animationHeight) {
        // SCROLL DOWN
        var pos = 0; // start scrolling with animation at 0 (0% of the screens vh)
        var id = setInterval(frame, 10);
        function frame() {
          if (pos == 100) {
            clearInterval(id); // once pos is equal to 100 stop the scrolling
          } else {
            pos++; // add 1 to pos until pos is equal to 100
            myAnimation.style.height = pos + '%'; 
          };
        };

        // Toggling the visibility of the resume and the enter hint
        elementsToggler(cv, hint);
    }
    else{
        // Do nothing
    };
  }


///////////////////////////////////////
///////////////////////////////////////
////////////elementsToggler////////////
///////////////////////////////////////
///////////////////////////////////////

  function elementsToggler(ele1, ele2) {

    // Opens Element 1: Toggles Opacity 1 and visibility visibile 
    ele1.classList.toggle('open');

    // Closes Element 2: Toggles Opacity 0 and visibility hidden 
    ele2.classList.toggle('close'); 
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////// Plugging Footer /////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

var year = new Date().getFullYear();
var date = `Copyright &copy; ${year} | Rightbrainpapi.`;
document.getElementsByClassName('footer')[0].innerHTML = date;




