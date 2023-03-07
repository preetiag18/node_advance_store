"use strict";

(function () {
  // init here
  let numberField;
  let nameField;
  let breedField;
  let yearOfBirthField;
  let lengthField;
  let messagearea;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    numberField = document.getElementById("number");
    nameField = document.getElementById("name");
    breedField = document.getElementById("breed");
    yearOfBirthField = document.getElementById("yearOfBirth");
    lengthField = document.getElementById("length");
    messagearea = document.getElementById("messagearea");

    document.getElementById("submit").addEventListener("click", send);
  }

  async function send() {
    clearMessage();

    const cat = {
      number: +numberField.value,
      name: nameField.value,
      breed: breedField.value,
      yearOfBirth: yearOfBirthField.value,
      length: +lengthField.value,
    };
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(cat),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      };
      const data = await fetch("http://localhost:4000/api/cats/", options);
      const status = await data.json();

      console.log(status);

      if (status.message) {
        updateMessage(status.message, status.type);
      }
    } catch (error) {
      updateMessage(error.message, "error");
    }
  }

  function updateMessage(message, type) {
    messagearea.textContent = message;
    messagearea.setAttribute("class", type);
  }
  function clearMessage() {
    messagearea.textContent = "";
    messagearea.removeAttribute("class");
  }
})();
