"use strict";
//  "insert into cat (name, breed, yearOfBirth, length, number)"
const toInsertArray = (cat) => [
  cat.name,
  cat.breed,
  +cat.yearOfBirth,
  +cat.length,
  +cat.number,
];

// "update cat set name=?, breed=?, yearOfBirth=?, length=?"
// "where number=?"

const toUpdateArray = (cat) => [
  cat.name,
  cat.breed,
  +cat.yearOfBirth,
  +cat.length,
  +cat.number,
];

module.exports = { toInsertArray, toUpdateArray };
