let harryAngerLevel = 0;
let harryHappyLevel = 0;

const space = " ";

const backupAngerWords = "fuck bitch wanker";
const backupHappyWords = "waffle yay hooray";

const harryAngerWordsDictionary = localStorage.getItem("harry_anger_words_dictionary");
const harryHappyWordsDictionary = localStorage.getItem("harry_happy_words_dictionary");

function initHarry () {
  if (harryAngerWordsDictionary === null || harryAngerWordsDictionary === undefined || harryAngerWordsDictionary === "") {
    localStorage.setItem("harry_anger_words_dictionary", String(backupAngerWords));
  }
  
  if (harryHappyWordsDictionary === null || harryHappyWordsDictionary === undefined || harryHappyWordsDictionary === "") {
    localStorage.setItem("harry_happy_words_dictionary", String(backupHappyWords));
  }
}

initHarry();
