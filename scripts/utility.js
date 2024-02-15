
 
function hideElementById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('hidden'); 
}
 
function ShowElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-[#FFA500]');
}

function getARandomAlphabet(){
  // const alphabets = ["a","b",....]
 // get or create an alphabet array
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  // console.log(alphabets);
  // get a random index between 0 to 25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  // console.log(index);
  const alphabet = alphabets[index];
  // console.log(index, alphabet);
  return alphabet;
}

