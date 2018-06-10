//onst app = "I don't do much."

var dodger = document.getElementById('dodger')

// we have to recall that the black box is using the coordinates of (dodger.style.left,dodger.style.bottom)
function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', ''); // replace(searchvalue, newvalue) 
  // we don't use dodger.style.right because style.left is on the HTML document
  var right = parseInt(rightNumbers, 10); //parseInt(string, radix)
 
  if (doger.style.right > 0) { // this prevents the box from going all the way to the right
    dodger.style.left = `${right + 1}px`; 
  }
}
document.addEventListener('keydown', function(e){
  if (e.which === 39){
    moveDodgerRight();
  }
})