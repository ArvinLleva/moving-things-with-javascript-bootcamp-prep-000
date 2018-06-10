//onst app = "I don't do much."

var dodger = document.getElementById('dodger')

// we have to recall that the black box is using the coordinates of (dodger.style.left,dodger.style.bottom)
function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', ''); // replace(searchvalue, newvalue) 
  // we don't use d
  var right = parseInt(rightNumbers, 10); //parseInt(string, radix)
 
  if (right > 0) { // this prevents the box from going all the way to the right
    dodger.style.right = `${right + 1}px`; 
  }
}
