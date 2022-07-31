function startApp() {
  // Your entire app should not necessarily be coded inside this
  // single function (though there's no penalty for that),
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  let initialTextArray = [];
  let scrambleWordsArray = null;
  let symbolSelected;
  // // Advanced features
  const symbolSelect = document.getElementById("symbol");
  symbol.addEventListener("change", () => {
    symbolSelected = symbol.value;
  });

  //Get stats html
  const wordScannedCount = document.getElementById("words_scanned_count");
  const wordsMatchedCount = document.getElementById("words_matched_count");
  const charactersScrambledCount = document.getElementById(
    "characters_scrambled_count"
  );
  const timeTaken = document.getElementById("time_taken");

  // // Takes the initial Text and puts them in array
  const initialText = document.getElementById("initial_text");
  initialText.addEventListener("change", () => {
    initialTextArray = initialText.value.toLowerCase().split(" ");
  });

  // // //Takes the words that needs to be scrambled and puts them in an array
  const wordsToScramble = document.getElementById("words_to_scramble");
  wordsToScramble.addEventListener("change", () => {
    scrambleWordsArray = wordsToScramble.value.toLowerCase().split(" ");
  });

  // //Get exact number of symbols to display
  const exactLength = (string) => {
    let symbol = [];
    for (let i = 0; i < string.length; i++) {
      if (!symbolSelected) {
        symbol.push("*");
      } else {
        symbol.push(symbolSelected);
      }
    }
    return symbol.join("");
  };

  // // Replaces Original Text with asterisks

  const scrambleText = (OriginalArray, wordsToScrambleArray) => {
    const start = Date.now();
    let matchedCount = 0;
    let CharacterCount = 0;
    let newArray = [...OriginalArray];
    wordsToScrambleArray.forEach((element) => {
      for (let i = 0; i < newArray.length; i++) {
        if (element == newArray[i]) {
          CharacterCount += newArray[i].length;
          newArray[i] = exactLength(newArray[i]);
          matchedCount += 1;
        } else {
          newArray[i] = newArray[i];
        }
      }
    });
    timeTaken.innerHTML = `Time taken: ${((Date.now() - start) / 1000).toFixed(
      2
    )} seconds`;
    const numberOfScannedWords = OriginalArray.length;
    wordScannedCount.innerHTML = `number of scanned words: ${numberOfScannedWords}`;
    wordsMatchedCount.innerHTML = `number of matched words: ${matchedCount}`;
    charactersScrambledCount.innerHTML = `Character count: ${CharacterCount}`;

    return newArray.join(" ");
  };

  // // // Assigns the scrambleText function to the button and displays the scrambled text on the HTML page
  document.getElementById("scrambleText").addEventListener("click", () => {
    console.log(scrambleText(initialTextArray, scrambleWordsArray));
    document.getElementById("scrambledTextDisplayedHere").innerHTML =
      scrambleText(initialTextArray, scrambleWordsArray);
  });
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
