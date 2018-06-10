//onst app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', ''); // replace(searchvalue, newvalue)
  var right = parseInt(rightNumbers, 10); //parseInt(string, radix)
 
  if (right > 0) {
    dodger.style.left = `${right + 1}px`;
  }
}

document.addEventListener('keydown', function(e){
  if(e.which === 39){ // 39 is the ascii key-value for right
  moveDodgerRight();
  }
})


var dodger = document.getElementById('dodger')
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})