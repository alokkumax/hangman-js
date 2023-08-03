// alert("hey")
// let str = "";
// let btns = document.querySelectorAll("button");
// Array.from(btns).forEach((btn) => {
//     btn.addEventListener("click", function (e) {
//         var audio = new Audio("key.mp3");
//         audio.play();
//         console.log(e.target);
       
//         if(ans.includes(e.target.innerHTML)){
//             // entered letter -> place in order
//             let posi = ans.indexOf(e.target.innerHTML) + 1;
//             document.querySelector("#res").innerHTML = document.querySelector("#res").innerHTML + e.target.innerHTML
//             if(document.querySelector("#res").innerHTML == ans ){
//                 document.querySelector("#mod").innerHTML = "YOU WON HURRAYYY!!!"
//             }
//         }
//         else{
//             mistakes++
//             document.querySelector("#mist").innerHTML = mistakes;
//             if(mistakes== maxAttempts){
//                 document.querySelector("#mod").innerHTML = "YOU LOST SORRY TRY AGAIN ,\n THE ANSWER is " + ans 
//             }
//         }
//     })
// })

const langs = [
    "python",
    "javaScript",
    "java",
    "c",
    "typeScript",
    "php",
    "ruby",
    "swift",
    "kotlin",
    "go",
    "rust",
    "dart",
    "sql",
]
let maxAttempts = 6;
let ans = "";
let mistakes = 0;
let guessed = [];
function randomLang(){
    let random = Math.floor(Math.random()*langs.length );
    console.log(langs[random]);
    console.log(random);
    ans = langs[random];
    guessedWord()
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="keyB"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }
  
  function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
  
    if (ans.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if (ans.indexOf(chosenLetter) === -1) {
      mistakes++;
      updateMistakes();
      checkIfGameLost();
      updateHangman();
    }
  }

  function reset(){
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';
  
    randomLang();
    guessedWord();
    updateMistakes();
    generateButtons();
  }
  function checkIfGameWon() {
    if (hiddenWord === ans) {
      document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
  }
  
  function checkIfGameLost() {
    if (mistakes === maxAttempts) {
      document.getElementById('und').innerHTML = 'The answer was: ' + ans;
      document.getElementById('keyboard').innerHTML = 'You Lost!!!';
    }
  }
  function updateMistakes() {
    document.getElementById('mist').innerHTML = mistakes;
  }
    
function updateHangman(){
    document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}
function guessedWord(){
    hiddenWord = ans.split('').map(letter => (guessed.indexOf(letter)>= 0 ? letter : " _ ")).join('');
    document.querySelector("#und").innerHTML = hiddenWord;
}


generateButtons();