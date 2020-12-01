let harryAngerLevel = 0;
let harryHappyLevel = 0;

const space = " ";

const backupAngerWords = "fuck bitch wanker";
const backupHappyWords = "waffle yay hooray";

const harryAngerWordsDictionary = localStorage.getItem("harry_anger_words_dictionary");
const harryHappyWordsDictionary = localStorage.getItem("harry_happy_words_dictionary");

let initAngerWords = "";
let initHappyWords = "";

function initHarry () {
  document.write("");
  document.write(`<div id="harry"></div>`);
  document.body.style.backgroundColor = "black";
  
  if (harryAngerWordsDictionary === null || harryAngerWordsDictionary === undefined || harryAngerWordsDictionary === "") {
    localStorage.setItem("harry_anger_words_dictionary", String(backupAngerWords));
    
    initAngerWords = "Created a dictionary for angry words...";
  }
  
  else {
    initAngerWords = "Checked dictionary for angry words...";
  }
  
  if (harryHappyWordsDictionary === null || harryHappyWordsDictionary === undefined || harryHappyWordsDictionary === "") {
    localStorage.setItem("harry_happy_words_dictionary", String(backupHappyWords));
    
    initHappyWords = "Created a dictionary for happy words...";
  }
  
  else {
    initHappyWords = "Checked dictionary for angry words...";
  }
  
  console.log(initAngryWords);
  console.log(initHappyWords);
}

initHarry();
