"use strict";

(function () {
  let resultarea;
  let messagearea;
  let catNumber;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    resultarea = document.getElementById("resultarea");
    catNumber = document.getElementById("catnumber");
    messagearea = document.getElementById("messagearea");
    document.getElementById("submit").addEventListener("click", send);
  }

  async function send() {
    clearMessage();
    resultarea.innerHTML = "";
    try {
      if (catNumber.value.trim().length > 0) {
        const data = await fetch(
          `http://localhost:4000/api/cats/${catNumber.value}`,
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
    } catch (error) {
      updateMessage(`Not found.${error.message}`, "error");
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

  function updateCat(result) {
    if (result.length === 0) return;
    const cat = result[0];
    resultarea.innerHTML = `
   <p><span class="legend">Number:</span>${cat.number}</p>
   <p><span class="legend">Name:</span>${cat.name}</p>
   <p><span class="legend">Breed:</span>${cat.breed}</p>
   <p><span class="legend">yearOfBirth:</span>${cat.yearOfBirth}</p>
   <p><span class="legend">Length:</span>${cat.length}</p>
   `;
  }
})();
