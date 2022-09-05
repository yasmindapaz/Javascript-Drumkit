const elements = document.querySelectorAll(".set button");
elements.forEach((elem)=> elem.addEventListener("click", handleClick));
document.addEventListener("keydown", handleKeyPress);
function handleClick() {
  clickSound(this.innerHTML);
  clickAnimation(this.innerHTML);
}

function handleKeyPress() {
  var charCode = event.keyCode;
  var key = (event.key).toLowerCase();
  if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
    clickSound(key);
    clickAnimation(key);
  }
}

function clickAnimation(key) {
    var buttonElement = document.querySelector('.' + key) ?? null;
    console.log(buttonElement);
    if (buttonElement) {
    buttonElement.classList.add('pressed');
    setTimeout(() => buttonElement.classList.remove('pressed'), 1000);
  }
}

function clickSound(key) {
  let tom;
  switch (key) {
    case 'w':
      tom = new Audio('sounds/tom-1.mp3');
      tom.play();
      break;
    case 'a':
      tom = new Audio('sounds/tom-2.mp3');
      tom.play();
      break;
    case 's':
      tom = new Audio('sounds/tom-3.mp3');
      tom.play();
      break;
    case 'd':
      tom = new Audio('sounds/tom-4.mp3');
      tom.play();
      break;
    case 'j':
      tom = new Audio('sounds/crash.mp3');
      tom.play();
      break;
    case 'k':
      tom = new Audio('sounds/kick-bass.mp3');
      tom.play();
      break;
    case 'l':
      tom = new Audio('sounds/snare.mp3');
      tom.play();
      break;
  }
}
