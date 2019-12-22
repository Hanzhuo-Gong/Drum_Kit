//document.getElementsByClassName("w drum").addEventListener("click",handleClick);

var allDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < allDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonTrigger = this.innerHTML;

    makeSound(buttonTrigger);
    buttonAnimation(buttonTrigger);
  });

}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

// function checkButton(button) {
//
// }
function makeSound(key) {

  switch (key) {
    case "w":
      var tomSound1 = new Audio("sounds/tom-1.mp3");
      tomSound1.play();
      break;

    case "a":
      var tomSound2 = new Audio("sounds/tom-2.mp3");
      tomSound2.play();
      break;

    case "s":
      var tomSound3 = new Audio("sounds/tom-3.mp3");
      tomSound3.play();
      break;

    case "d":
      var tomSound4 = new Audio("sounds/tom-4.mp3");
      tomSound4.play();
      break;

    case "j":
      var snareSound = new Audio("sounds/snare.mp3");
      snareSound.play();
      break;

    case "k":
      var crashSound = new Audio("sounds/crash.mp3");
      crashSound.play();
      break;

    case "l":
      var kickSound = new Audio("sounds/kick-bass.mp3");
      kickSound.play();
      break;

    default:
      console.log("Unexpected button pressed");
  }
}

function buttonAnimation(button) {
  var activeButton = document.querySelector("." + button);

  activeButton.classList.add("pressed"); //create the class to link with css

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
// function handleClick() {
//   alert("key pressedd");
// }
