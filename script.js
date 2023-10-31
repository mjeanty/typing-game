const word  = document.getElementById( ' word' )
      text = document.getElementById( ' text' )
      scoreEl = document.getElementById( ' score' )
      timeEl = document.getElementById( ' time ' )
     endgameEl =  document.getElementById( ' end-game  ' )
      settingsBtn =document.getElementById( ' settings-btn ' )
      settings = document.getElementById( ' settings ' )
      settingsForm = document.getElementById( ' settings-form ' )
      difficultySelect = document.getElementById( ' difficulty ' )


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

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)]
   
}
 
