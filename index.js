
var list  = document.querySelectorAll(".drum");


// Detect which key clicked

for (let i = 0; i < list.length; i++){
  list[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    make_sound(buttonInnerHTML);
    button_animation(buttonInnerHTML);
  }
  );
}

// Detects keybaord press
document.addEventListener("keydown", function(event){
  make_sound(event.key);
  button_animation(event.key);

});

// Plays a sound based on key pressed

function make_sound(key){

    switch(key){
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;
      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
      break;
      case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
      break;
      case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
      break;
      case "j":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
      break;
      case "k":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
      break;
      case "l":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
      break;

      default: console.log(buttonInnerHTML);

    }

}

// Add animation into the keys pressed

function button_animation(key){
  var active_button = document.querySelector("." + key);
  active_button.classList.add("pressed");
  // Remove the animation after 0.1 sec
  setTimeout (function() {
      active_button.classList.remove("pressed");}, 100);
}



// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
