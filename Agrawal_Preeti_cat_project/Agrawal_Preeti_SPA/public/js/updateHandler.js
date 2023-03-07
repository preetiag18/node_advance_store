"use strict";

(function () {
  let numberField;
  let nameField;
  let breedField;
  let yearOfBirthField;
  let lengthField;
  let messagearea;
  let searchState = true;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    numberField = document.getElementById("number");
    nameField = document.getElementById("name");
    breedField = document.getElementById("breed");
    yearOfBirthField = document.getElementById("yearOfBirth");
    lengthField = document.getElementById("length");
    messagearea = document.getElementById("messagearea");
    updateFields();

    document.getElementById("submit").addEventListener("click", send);
    numberField.addEventListener("focus", clearAll);
  }

  function updateMessage(message, type) {
    messagearea.textContent = message;
    messagearea.setAttribute("class", type);
  }
  function clearMessage() {
    messagearea.textContent = "";
    messagearea.removeAttribute("class");
  }

  function clearAll() {
    if (searchState) {
      clearFieldValues();
      clearMessage();
    }
  }

  function updateFields() {
    if (searchState) {
      numberField.removeAttribute("readonly");
      nameField.setAttribute("readonly", true);
      breedField.setAttribute("readonly", true);
      yearOfBirthField.setAttribute("readonly", true);
      lengthField.setAttribute("readonly", true);
    } else {
      numberField.setAttribute("readonly", true);
      nameField.removeAttribute("readonly");
      breedField.removeAttribute("readonly");
      yearOfBirthField.removeAttribute("readonly");
      lengthField.removeAttribute("readonly");
    }
  } //update field end

  function clearFieldValues() {
    numberField.value = "";
    nameField.value = "";
    breedField.value = "";
    yearOfBirthField.value = "";
    lengthField.value = "";
    searchState = true;
    updateFields();
  } // end of clearFieldValues

  function updateCat(result) {
    if (result.length === 0) return;
    const cat = result[0];
    numberField.value = cat.number;
    nameField.value = cat.name;
    breedField.value = cat.breed;
    yearOfBirthField.value = cat.yearOfBirth;
    lengthField.value = cat.length;
    searchState = false;
    updateFields();
  }

  async function send() {
    try {
      if (searchState) {
        // get cat
        if (numberField.value.trim().length > 0) {
          const data = await fetch(
            `http://localhost:4000/api/cats/${numberField.value}`,
            { mode: "cors" }
          );
          const result = await data.json();
          if (result) {
            if (result.message) {
              updateMessage(result.message, result.type);
            } else {
              updateCat(result);
            }
          }
        }
      } else {
        // put cat
        const cat = {
          number: +numberField.value,
          name: nameField.value,
          breed: breedField.value,
          yearOfBirth: +yearOfBirthField.value,
          length: +lengthField.value,
        };
        const options = {
          method: "PUT",
          body: JSON.stringify(cat),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        };
        const data = await fetch(
          `http://localhost:4000/api/cats/${cat.number}`,
          options
        );
        const status = await data.json();

        if (status.message) {
          updateMessage(status.message, status.type);
        }
        searchState = true;
        updateFields();
      }
    } catch (err) {
      updateMessage(err.message, "error");
    }
  }
})();
