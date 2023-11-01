const word  = document.getElementById( 'word' )
const      text = document.getElementById( 'text' )
const      scoreEl = document.getElementById( 'score' )
const      timeEl = document.getElementById( 'time' )
const     endgameEl =  document.getElementById( 'end-game' )
const      settingsBtn =document.getElementById( 'settings-btn' )
const      settings = document.getElementById( 'settings' )
const      settingsForm = document.getElementById( 'settings-form' )
const      difficultySelect = document.getElementById( 'difficulty' )


const words = [
        "apple", "banana", "cherry", "orange", "grape", "kiwi", "lemon", "mango", "pineapple", "strawberry",
        "blueberry", "watermelon", "peach", "pear", "plum"
      ]






      // initalize word
let randomWord;

///init score
let score = 0;

///initialize time
let time = 10;

text.focus()


function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

// add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// update score
function updateScore (){
  score++
  scoreEl.innerHTML = score
}

addWordToDOM()


// event listeners
text.addEventListener('input', e => {
  const insertedText = e.target.value
  if(insertedText === randomWord){
   addWordToDOM()
   updateScore()
   e.target.value = ""
  }
})