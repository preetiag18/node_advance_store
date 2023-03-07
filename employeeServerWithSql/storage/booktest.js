"use strict";

const {
  getAllFromstorage,
  getFromstorage,
  addToStorage,
  updateStorage,
  removeFromStorage,
} = require("./storageLayer");

//getAllFromstorage().then(console.log).catch(console.log);
//getFromstorage(2).then(console.log).catch(console.log);
// addToStorage({
//   id: "100",
//   firstname: "Preeti",
//   lastname: "Agrawal",
//   department: "ict",
//   salary: 4000,
// })
//   .then(console.log)
//   .catch(console.log);

// updateStorage({
//   number: 100,
//   title: " A and B of javascript",
// })
//   .then(console.log)
//   .catch(console.log);

removeFromStorage(3).then(console.log).catch(console.log);
