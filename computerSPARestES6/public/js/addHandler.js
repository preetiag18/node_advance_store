import { updateMessage, clearMessage } from "/js/helperFunctions.js";

let idField;
let nameField;
let typeField;
let processorField;
let amountField;
let messagearea;

document.addEventListener("DOMContentLoaded", init);

function init() {
  idField = document.getElementById("id");
  nameField = document.getElementById("name");
  typeField = document.getElementById("type");
  processorField = document.getElementById("processor");
  amountField = document.getElementById("amount");
  messagearea = document.getElementById("messagearea");

  document.getElementById("submit").addEventListener("click", send);
}

async function send() {
  clearMessage(messagearea);

  const computer = {
    id: +idField.value,
    name: nameField.value,
    type: typeField.value,
    processor: processorField.value,
    amount: +amountField.value,
  };
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(computer),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = await fetch(`/add`, options);
    const status = await data.json();

    console.log(status);

    if (status.message) {
      updateMessage(messagearea, status.message, status.type);
    }
  } catch (error) {
    updateMessage(messagearea, error.message, "error");
  }
}
