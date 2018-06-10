//onst app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '');
  var right = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener('keydown', function(e){
  if(e.which ===39) // 39 is the ascii key-value for right
  moveDodgerRight();
})
