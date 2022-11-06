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
          "Please enter your message above in input box for translation"
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
      displayText.style.border = "1px solid #ccc";

      // To display error message in output textarea  section box
    } catch (error) {
      displayText.style.border = "2px solid red";
      displayText.innerText = `Something went wrong 💥💥 ${
        error.status || ""
      } ${error.message || " "}. Try again!`;
    } finally {
      displayText.scrollIntoView({ behavior: "smooth" });
    }
  }

  btnTranslate.addEventListener("click", getTranslatedInput);
}
