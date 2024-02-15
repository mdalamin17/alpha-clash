/**
 * easy way to hide and add screen
 * 
 * 
 function play() {
  // step-1: hide the home screen
  // show the playground
  const homeSection = document.getElementById("home-screen");
  // console.log(homeSection);(will show the home-screen)

  homeSection.classList.add("hidden");
  // the above .add() will hide home screen

  // console.log(homeSection.classList);(will show all the classes from home-screen which is like array)

  const playGroundSection = document.getElementById("play-ground");
  // console.log(playGroundSection);
  // console.log(playGroundSection.classList);

  playGroundSection.classList.remove("hidden");
}
 */


// utility file
 function continueGame(){
  // step-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log('Your random alphabet', alphabet);

  // set randomly generate alphabet to the screen(show it)

  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
 }

function play(){
    hideElementById('home-screen');
    ShowElementById('play-ground');
    continueGame ();
}



