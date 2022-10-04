"use strict";

/* API - Minion Translation
 https://api.funtranslations.com/translate/minion.json 

 */

{
  const userInput = document.querySelector(".user-input");
  const displayText = document.querySelector(".display-text");
  const btnTranslate = document.querySelector(".btn-translate-input");

  async function getTranslatedInput(e) {
    try {
      const text = userInput.value;

      // If no input for translation is entered then throw alert message
      if (text === "") {
        throw new Error(
          "Please enter your message below in input box for translation"
        );
      }

      const URLInput = `https://api.funtranslations.com/translate/minion.json?text=${text}`;
      const response = await fetch(URLInput);

      if (!response.ok) {
        throw new Error(`(${response.status})`);
      }

      const data = await response.json();

      // To display fetched data in display section box
      displayText.innerText = data.contents.translated;
    } catch (error) {
      alert(
        `Something went wrong 💥💥 ${error.status || ""} ${
          error.message || " "
        }. Try again!`
      );
    }
  }

  btnTranslate.addEventListener("click", getTranslatedInput);
}
