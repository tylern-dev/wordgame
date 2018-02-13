let guessRemaining = 10;
let wins = 0;
let wrongLetters = [];
let currentWord = '';
let lettersArray; 
let blankWord = document.getElementById('current-word');

let wordList = ['apples', 'pizza', 'lasagna', 'sushi', 'oranges', 'tacos', 'salmon'];

let randomWord = function(arr){
  let arrayLength = arr.length
  let randNum = Math.floor(Math.random() * arrayLength);
  return arr[randNum];
}

function replaceLetters(word){
  let splitWord = word.split('');
  console.log(splitWord)
  for(var i=0; i<splitWord.length; i++){
    currentWord += '_'
  }
  lettersArray =  currentWord.split('');
  console.log(lettersArray)
}

replaceLetters(randomWord(wordList))


