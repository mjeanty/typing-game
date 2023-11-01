const word  = document.getElementById( 'word' )
const      text = document.getElementById( 'text' )
const      scoreEl = document.getElementById( 'score' )
const      timeEl = document.getElementById( 'time' )
const     endgameEl =  document.getElementById( 'end-game-container' )
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

// counting down
const timeInterval = setInterval(updateTime, 1000)

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


// seconds updater

function updateTime(){
  time--
  timeEl.innerHTML = time + "s"
  if(time === 0){
    clearInterval(timeInterval)
    //game over functon
    gameOver()
  }
}

function gameOver() {
  endgameEl.innerHTML =`
    <h1>time's up</h1>
    <p> your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>

  `
  endgameEl.style.display = 'flex'
}



addWordToDOM()


// event listeners
text.addEventListener('input', e => {
  const insertedText = e.target.value
  if(insertedText === randomWord){
   addWordToDOM()
   updateScore()
   e.target.value = ""

   time += 15
   updateTime
  }
})