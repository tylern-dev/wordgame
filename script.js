function game() {
  let guessRemaining = 10;
  let wrongLetters = [];
  let currentBlankWord = '';
  let blankLettersArray;
  let letterKeyPressed;
  let blankWordHTML = document.getElementById('current-word');

  let wordList = ['apples', 'pizza', 'lasagna', 'sushi', 'oranges', 'tacos', 'salmon', 'pie', 'steak'];
  let currentRandomWord = wordList[Math.floor(Math.random() * wordList.length)];

  // takes the current word and makes it blank with spaces
  for (var i = 0; i < currentRandomWord.length; i++) {
    currentBlankWord += '_';
  }
  blankLettersArray = currentBlankWord.split('')





  function letterCheckFunction(keyPress) {
    console.log(keyPress)
    if (currentRandomWord.indexOf(keyPress) !== -1) {
      for (var i = 0; i < blankLettersArray.length; i++) {
        if (keyPress === currentRandomWord[i]) {
          blankLettersArray[i] = keyPress;
        }
      }
    }
  }


  document.onkeyup = function (event) {
    var letterKeyPressed = event.key;
    letterCheckFunction(letterKeyPressed);
    blankWordHTML.innerHTML = blankLettersArray.join(' ')
  }


}

game();


